export interface PaginatedRegion {
    docs: Region[];
    totalDocs: number;
    limit: number;
    page: number;
    totalPages: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage?: any;
    nextPage: number;
}

export interface Region {
    _id: string;     
    libeller: string;
    status: number
}