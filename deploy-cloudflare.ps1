$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectDir

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js/npm is required before deploying with Cloudflare Wrangler."
  Write-Host "Install Node.js, then run this script again."
  exit 1
}

npx wrangler@latest pages deploy . --project-name random-tool-studio
