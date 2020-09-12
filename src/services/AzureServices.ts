// Backend API hosting
export const APIUrl : string = process.env.REACT_APP_API_URL!;

// Azure storage
export const account: string = process.env.REACT_APP_AZURE_STORAGE_ACCOUNT!;

// service Shared Access Signature Token - can be obtained from the azure portal
export const accountSas: string = process.env.REACT_APP_SAS_TOKEN!;

export const blobConnStr: string = process.env.REACT_APP_BLOB_CONNECTION_STRING!;

// export const BlobServiceSasUrl = process.env.REACT_APP_BLOB_SERVICE_SAS_URL!;

// export const FileServiceSasUrl = process.env.REACT_APP_FILE_SERVICE_SAS_URL!;

// export const QueueServiceSasUrl = process.env.REACT_APP_QUEUE_SERVICE_SAS_URL!;

// export const TableServiceSasUrl = process.env.REACT_APP_TABLE_SERVICE_SAS_URL!;

export const containerName: string = process.env.REACT_APP_AZURE_STORAGE_CONTAINER!;