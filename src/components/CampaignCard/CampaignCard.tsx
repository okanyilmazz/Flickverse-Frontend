
import { Card, CardText } from 'react-bootstrap'
import './CampaignCard.css'
export default function CampaignCard(props: any) {
    return (
        <div className='campaign-card'>
            <Card>
                <Card.Img src={props.imagePath}></Card.Img>
            </Card>
        </div>
    )
}
