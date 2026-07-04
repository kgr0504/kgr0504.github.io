param(
  [string]$RemoteUrl = "",
  [string]$CommitMessage = "Deploy random tool studio"
)

$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectDir

function Invoke-ProjectGit {
  & git -c "safe.directory=$ProjectDir" @args
  if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
  }
}

function Read-ProjectGit {
  $previousPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  $output = & git -c "safe.directory=$ProjectDir" @args 2>$null
  $script:LastReadGitExitCode = $LASTEXITCODE
  $ErrorActionPreference = $previousPreference
  return $output
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "Git is required to deploy to GitHub Pages."
  exit 1
}

if (-not (Test-Path ".git")) {
  Invoke-ProjectGit init
  Invoke-ProjectGit branch -M main
}

$gitName = Read-ProjectGit config user.name
if (-not $gitName) {
  Invoke-ProjectGit config user.name "Random Tool Studio"
}

$gitEmail = Read-ProjectGit config user.email
if (-not $gitEmail) {
  Invoke-ProjectGit config user.email "random-tool-studio@example.com"
}

if ($RemoteUrl.Trim()) {
  $existingRemote = Read-ProjectGit remote get-url origin 2>$null
  if ($script:LastReadGitExitCode -eq 0) {
    Invoke-ProjectGit remote set-url origin $RemoteUrl
  } else {
    Invoke-ProjectGit remote add origin $RemoteUrl
  }
}

$origin = Read-ProjectGit remote get-url origin 2>$null
if ($script:LastReadGitExitCode -ne 0 -or -not $origin.Trim()) {
  Write-Host "No GitHub remote is set."
  Write-Host "Create an empty GitHub repository, then run:"
  Write-Host ".\deploy-github-pages.ps1 -RemoteUrl https://github.com/YOUR_NAME/YOUR_REPO.git"
  exit 1
}

Invoke-ProjectGit add .
$changes = Read-ProjectGit status --porcelain
if ($changes) {
  Invoke-ProjectGit commit -m $CommitMessage
} else {
  Write-Host "No file changes to commit."
}

Invoke-ProjectGit push -u origin main

Write-Host ""
Write-Host "Pushed to GitHub."
Write-Host "In the GitHub repository, open Settings > Pages and set Source to GitHub Actions if it is not already selected."
Write-Host "After the workflow finishes, your site URL will appear in the Actions or Pages screen."
