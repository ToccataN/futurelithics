import {
  Card, 
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

/*
 *  Custom card should take in text, title, img, linkURL, link text as props
 */

const CustomCard = (props) => {
  
  const {
  	color,
  	bgColor,
  	bodyColor,
  	title,
  	text,
  	img,
    link,
  } = props;

  return (
  	<a style={{ cursor: 'pointer', textDecoration: "none" }} href={link}>
	  <Card style={{opacity: "90%", background: bgColor, minWidth: "275px"}}>
        <CardImg top width="100%" src={img} alt={title} />
        <CardBody style={{background: bodyColor, color: color}}>
		  <CardTitle tag="h5" className="text-center">{title}</CardTitle>
		  <CardText>{text}</CardText>
		</CardBody>
	  </Card>
    </a>
  );

}

export default CustomCard;