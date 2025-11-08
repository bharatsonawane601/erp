# Git Setup Script for Idurar ERP CRM
# Run this script after installing Git to initialize and push your repository

Write-Host "Setting up Git repository..." -ForegroundColor Green

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "Error: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Initialize git repository
Write-Host "`nInitializing git repository..." -ForegroundColor Cyan
git init

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Cyan
git add .

# Create initial commit
Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Idurar ERP CRM project"

Write-Host "`nGit repository initialized successfully!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Create a repository on GitHub/GitLab/Bitbucket" -ForegroundColor White
Write-Host "2. Add the remote: git remote add origin <repository-url>" -ForegroundColor White
Write-Host "3. Push to remote: git push -u origin main" -ForegroundColor White
Write-Host "`nOr if using master branch: git push -u origin master" -ForegroundColor White

