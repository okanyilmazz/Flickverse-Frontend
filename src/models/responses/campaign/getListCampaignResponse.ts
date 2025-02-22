import { Identifier } from "typescript";

export default interface GetListCampaignResponse {
    id: Identifier;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    imagePath: string;
}