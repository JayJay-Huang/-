> 套件 : System.IO.Compression.ZipFile
<packages> 
  <package id="System.IO.Compression.ZipFile" version="4.3.0" targetFramework="net48" /> 
</packages>

public void CreateZipFromDirectory() 
{ 
    string TempZip = Path.Combine(@"C:\SFTP\Download", "fileName.zip"); // 目的端folder、file名稱。
    string TempFolder = Path.Combine(@"C:\EStamp_Web\SFTP_Download"); // 來源端folder(DirectoryName)，需是Directory。
    ZipFile.CreateFromDirectory(TempFolder, TempZip); 
}