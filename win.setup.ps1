# Boxstarter options
$Boxstarter.RebootOk=$true # Allow reboots?
$Boxstarter.NoPassword=$false # Is this a machine with no login password?
$Boxstarter.AutoLogin=$true # Save my password securely and auto-login after a reboot

# Chocolatey packages to install
$ChocoInstalls = @(
    'visualstudiocode'
)

# Visual Studio Code extensions to install (both code-insiders and code if available)
$VSCodeExtensions = @(
    'adamvoss.yaml',
    'bierner.markdown-preview-github-styles',
    'donjayamanne.githistory',
    'DotJoshJohnson.xml',
    'eriklynd.json-tools',
    'formulahendry.azure-storage-explorer',
    'ms-mssql.mssql',
    'ms-vscode.azure-account',
    'ms-vscode.PowerShell',
    'msazurermtools.azurerm-vscode-tools',
    'robertohuertasm.vscode-icons',
    'samcogan.arm-snippets',
    'Shan.code-settings-sync',
    'hookyqr.beautify',
    'coenraads.bracket-pair-colorizer-2',
    'ms-dotnettools.csharp',
    'msjsdiag.debugger-for-chrome',
    'ms-azuretools.vscode-docker',
    'dracula-theme.theme-dracula',
    'dbaeumer.vscode-eslint',
    'github.vscode-pull-request-github',
    'eamodio.gitlens',
    'wix.vscode-import-cost',
    'ritwickdey.liveserver',
    'pkief.material-icon-theme',
    'jebbs.plantuml',
    'esbenp.prettier-vscode',
    'ms-python.python',
    'glen-84.sass-lint',
    'lightbend.vscode-sbt-scala',
    'ms-vscode.vscode-typescript-tslint-plugin',
    'visualstudioexptteam.vscodeintellicode'
)

function Get-ChocoPackages {
    if (get-command clist -ErrorAction:SilentlyContinue) {
        clist -lo -r -all | Foreach {
            $Name,$Version = $_ -split '\|'
            New-Object -TypeName psobject -Property @{
                'Name' = $Name
                'Version' = $Version
            }
        }
    }
}

<#
    Install any chocolatey packages we want setup now
#>
Write-Output "Installing software via chocolatey"

# Don't try to download and install a package if it shows already installed
$InstalledChocoPackages = (Get-ChocoPackages).Name
$ChocoInstalls = $ChocoInstalls | Where { $InstalledChocoPackages -notcontains $_ }

if ($ChocoInstalls.Count -gt 0) {
    # Install a ton of other crap I use or like, update $ChocoInsalls to suit your needs of course
    $ChocoInstalls | Foreach-Object {
        try {
            choco upgrade -y $_ --cacheLocation "$($env:userprofile)\AppData\Local\Temp\chocolatey"
        }
        catch {
            Write-Warning "Unable to install software package with Chocolatey: $($_)"
        }
    }
}
else {
    Write-Output 'There were no packages to install!'
}

# Visual Studio Code extension setup
if ($null -ne (get-command 'code' -ErrorAction:SilentlyContinue)) {
    Write-Host "Installing $($VSCodeExtensions.count) extensions to VS Code"
    $VSCodeExtensions | ForEach-Object {
        code --install-extension $_
    }
}



Write-Host -ForegroundColor:Green "Install and configuration complete!"