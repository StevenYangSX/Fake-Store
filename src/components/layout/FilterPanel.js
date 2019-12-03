import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  setPriceNull,
  setPriceOne,
  setPriceThree,
  setPriceTwo,
  changeFeatured,
  changeOnSale
} from "../../actions/controlAction";
const FilterPanel = props => {
  return (
    <Fragment>
      <form>
        <fieldset class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="optionsRadios"
                id="optionsRadios1"
                value="option1"
                onClick={props.setPriceNull}
              />
              None
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="optionsRadios"
                id="optionsRadios1"
                value="option1"
                onClick={props.setPriceOne}
              />
              $ 0 - 1000
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="optionsRadios"
                id="optionsRadios2"
                value="option2"
                onClick={props.setPriceTwo}
              />
              $ 1001 - 2000
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="optionsRadios"
                id="optionsRadios2"
                value="option2"
                onClick={props.setPriceThree}
              />
              $ 3000 above
            </label>
          </div>

          <br />

          {/* <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                onClick={props.changeFeatured}
              />
              Featured Products
            </label>
          </div>
          <br />

          <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                onClick={props.changeOnSale}
              />
              On Sale
            </label>
          </div> */}
        </fieldset>
      </form>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  // user: state.user,
  // cart: state.cart
  control: state.control
});
export default connect(mapStateToProps, {
  setPriceNull,
  setPriceOne,
  setPriceThree,
  setPriceTwo,
  changeFeatured,
  changeOnSale
})(FilterPanel);
