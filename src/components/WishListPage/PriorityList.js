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
        <ul>
          <li>
            Personal care gift bundles – daily hygiene & pampering items.          
          </li>
          <li>
            Activity gift bundles – puzzles, books, movies, music, puzzle books (word finds, crosswords, sudoku, etc.) adult coloring books with colored pencils or pens, arts & crafts, and other hobbies.
          </li>
          <li>
            Heated electric blankets, throws, and pads with auto shut off.
          </li>
          <li>
            Winter coats & boots – all sizes, men & women.
          </li>
          <li>
            Sweaters & loungewear sets - sweats, fleece, comfy tops & bottoms (full zip, cardigan, & bigger sizes are most popular but all styles and sizes are needed for both men & women).
          </li>
          <li>
            Men’s hard soled, nonslip house slippers – all sizes.
          </li>
          <li>
            Bedding sheet sets & pillows – all sizes (twin & queen are popular).
          </li>
          <li>
            K Cup coffee makers & supplies.
          </li>
          <li>
            Instant Pots & other “all in one” appliances.
          </li>
          <li>
            Personal electronics – tablets, e-readers, music players, movie players, Joy for All (& other brands) lifelike robotic companion pets, various games & massagers.
          </li>
        </ul>
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
