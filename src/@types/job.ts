export interface JobSummary {
    id: string;
    name: string;
    requirement?: string;
    heat: number;
    updateTime: string;
    status: JobStatus;
}

export enum JobStatus {
    /**已下线 */
    Offline = 0,
    /**招聘中 */
    Recruiting = 1,
    /**即将到期 */
    AboutToExpire = 2
}