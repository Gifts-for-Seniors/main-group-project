import React from "react"
import { Typography, Button } from "@material-ui/core"
import "./WishListPage.css"
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'
import logo from "../../images/gifts-for-seniors-logo.png"

class PriorityList extends React.Component {    
  render() {
  return (
    <div>
      <div className="logo">
        <img style={{height: 100}} alt="logo" src={logo} />
      </div>
      <Typography style={{fontSize: 16, color: 'rgb(204, 0, 0)', textAlign: "center", marginBottom: 10}}>
        Wish List - New, Unwrapped Items
      </Typography>      
      <Typography gutterBottom style={{width: '80%', marginLeft: '15%'}}>
        •Sweaters especially cardigans (All sizes for men & women)<br />
        •Long-sleeved shirts (All sizes for men & women)<br />
        •Sweat or fleece tops & bottoms (All sizes for men & women)<br />
        •Nightwear and lounge-wear sets, bathrobes (All sizes for men & women)<br />
        •Warm hats, scarves, mittens or sets (All sizes for men & women)<br />
        •Hard-soled, nonslip house slippers (All sizes for men & women)<br />
        •Men’s t-shirts, sports jerseys, socks, & tennis shoes<br />
        •Bathroom towel sets (bath/hand/face), kitchen towel sets and hot pads<br />
        •Bed sheet sets, blankets, and pillows (All sizes, queen is especially needed)<br />
        •Kitchenware items, utensils, flatware sets, 4 piece place settings, etc.<br />
        •Appliances: countertop microwaves, filtered coffee makers, single cup coffee makers, electric kettles, toasters, breakfast sandwich makers, egg cookers,
          juicers, blenders, crock pots, instant pots, rice cookers, humidifiers, etc.<br />
        •Alarm clock radios with BIG numbers, reading assistance, and binoculars<br />
        •Electronics – music players, movie players, headphones, tablets, readers, etc.<br />
        •Music, movies, audio books, reading books, and other entertainment items<br />
        •Activity: LARGE print word finds crossword puzzles, coloring and art kits<br />
        •Personal care items – hair care, lotion, soap, dental care (toothbrush/paste), scent (perfume/cologne/air), nail care kits, and other spa sets<br />
        •Personal care electronics – electric toothbrushes, heating pads, clippers, etc.<br />
        •Beverage gift sets - coffee, tea, and hot chocolate<br />
        •Special treat sets - box or tin candy, nuts, & other snack bundles<br />
        •Greeting card assortment sets with a book of mailing stamps<br />
        •Basic needs gift cards (Target, Walmart, Cub Foods, Aldi & other stores)<br />
        •Entertainment gift cards (restaurant, performance/movie theaters, etc.)<br />
        •Financial support for Gifts for Seniors to fill in the low stocked items as needed<br />
      </Typography>
      <Typography style={{width: '85%', marginLeft: '10%', marginTop: 10, fontSize: 16, fontFamily: 'serif'}}>
        <i><b>
        Gifts for Seniors provides resources and life-affirming personal contact for isolated older adults.
        With the critical support of donors, volunteers, and community partnerships,
        we strive to alleviate the loss of connection to others and the devastating spiral into loneliness.
        </b></i>
      </Typography>
      <Typography style={{width: '70%', marginLeft: '10%', textAlign: "center", fontSize: 16, fontFamily: 'serif'}}>
        <i><b>Every gift has the potential to change a life!</b></i>
      </Typography>
    </div>
  )
  }
}

class PrintList extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <Button style={{ margin: 5, float: "right"}} autoFocus variant="outlined" onClick={handlePrint} color="primary">
              Print
            </Button>             
            )}            
          </PrintContextConsumer>
        </ReactToPrint>
        <PriorityList ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
export default PrintList
