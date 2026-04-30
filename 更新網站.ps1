# 磐石系統官網 - 一鍵更新腳本
# 每次修改完內容後，雙擊這個檔案即可自動上傳並更新網站

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   磐石系統官網 - 一鍵更新" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# 切換到專案資料夾
cd "G:\我的雲端硬碟\Codex沙\磐石系統網站設計"

# 取得當前時間作為 commit 訊息
$time = Get-Date -Format "yyyy-MM-dd HH:mm"

# 加入所有變更
git add .

# 檢查是否有變更
$status = git status --porcelain
if (-not $status) {
    Write-Host "`n沒有需要更新的內容。" -ForegroundColor Yellow
    Write-Host "`n按 Enter 鍵關閉..." -ForegroundColor Gray
    Read-Host
    exit
}

# Commit
git commit -m "更新網站內容 - $time"

# 先 Pull 再 Push（避免遠端有新 commit 導致衝突）
Write-Host "`n同步遠端變更中..." -ForegroundColor Cyan
git pull origin main --rebase
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================" -ForegroundColor Green
    Write-Host "   ✓ 上傳成功！" -ForegroundColor Green
    Write-Host "   網站約 1-2 分鐘後自動更新" -ForegroundColor Green
    Write-Host "   https://panshi-formwork.com" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host "`n========================================" -ForegroundColor Red
    Write-Host "   ✗ 上傳失敗，請截圖上方錯誤訊息" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
}

Write-Host "`n按 Enter 鍵關閉..." -ForegroundColor Gray
Read-Host
