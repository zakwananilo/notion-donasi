export const renameFile = (oldFile: File, newFileName: string) => {
  return new File([oldFile.slice(0, oldFile.size, oldFile.type)], newFileName, { type: oldFile.type })
}

export const autoRenameFile = (oldFile: File) => {
  const newFileName = `profile_${Date.now()}.${getFileExtension(oldFile)}`;
  return renameFile(oldFile, newFileName);
}

export const getFileExtension = (file: File) => {
  const parts = file.name.split('.');
  const extension = parts[parts.length - 1];

  return extension.toLowerCase();
}