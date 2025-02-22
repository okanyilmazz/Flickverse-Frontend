import { Identifier } from 'typescript';
import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import GetListCampaignResponse from "../models/responses/campaign/getListCampaignResponse";
import GetCampaignResponse from "../models/responses/campaign/getCampaignResponse";
import AddedCampaignResponse from "../models/responses/campaign/addedCampaignResponse";
import UpdatedCampaignResponse from "../models/responses/campaign/updatedCampaignResponse";
import AddCampaignRequest from "../models/requests/campaign/addCampaignRequest";
import UpdateCampaignRequest from "../models/requests/campaign/updateCampaignRequest";
import axiosInstance from "../core/interceptors/axiosInterceptor";


class CampaignService extends BaseService<
    Paginate<GetListCampaignResponse>,
    GetCampaignResponse,
    AddCampaignRequest,
    AddedCampaignResponse,
    UpdateCampaignRequest,
    UpdatedCampaignResponse> {

    constructor() {
        super()
        this.apiUrl = "Campaigns/GetList?PageSize=10"
    }

    getAllCampaign(): Promise<AxiosResponse<Paginate<GetListCampaignResponse>>> {
        return axiosInstance.get<Paginate<GetListCampaignResponse>>("Campaigns/GetCampaignsInVision?PageIndex=0&PageSize=10");
    }

    getCampaignById(id: Identifier): Promise<AxiosResponse<GetCampaignResponse>> {
        return axiosInstance.get<GetCampaignResponse>("Campaigns/GetById?" + id);
    }
}

export default new CampaignService()