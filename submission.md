# WeatherApp_LabAdvanced1
### 1.ติดตั้ง nodejs, yarn และ git โดยใช้คำสั่ง
### `choco install nodejs`
### `choco install yarn`
### `choco install git`
### Note: ถ้ายังไม่ติดตั้ง chocolatey ให้ติดตั้งโดยใช้คำสั่งข้างล่าง โดยทำผ่านCommand Prompt (ที่รันด้วยสิทธิ์ Administrator)
หรือสามารถดูเพิ่มเติมได้ที่ https://chocolatey.org/docs/installation
### `@”%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe” -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command “ [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString(‘https://chocolatey.org/install.ps1'))" && SET “PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin”`
### 2.ติดตั้ง create-react-app CLI โดยใช้
### `yarn global add expo-cli `
### ซึ่งทำผ่านCommand Prompt (ที่รันด้วยสิทธิ์ Administrator)
### 3.เราสามารถสร้างโปรเจ็คในการพัฒนาโดยใช้คำสั่ง
### `expo init ชื่อโปรเจ็คของคุณ`
### 4.พิมพ์
### `cd ชื่อโปรเจ็คของคุณ `
### 5.ต่อมาเราก็เริ่มโปรเจ็คของเราด้วยคำสั่ง
### `yarn start `
### สิ่งที่แก้ไข
1. หน้า My Home
- เปลี่ยนพื้นหลัง
- เพิ่มขนาด cover ให้เต็มหน้าจอ
2. เพิ่มหน้า Aboutme
3. เพิ่ม Tab ที่อยู่ล่างสุดของหน้าจอ
4. หน้า Weather
- เพิ่มไอคอน
- ใส่พื้นหลังใหม่
- ดึงข้อมูลจาก api มาแสดงผลเพิ่มเติม คือ ความชื้น, ความเร็วลม และ ความดัน
