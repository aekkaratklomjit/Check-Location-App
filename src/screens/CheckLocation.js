import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import _ from 'lodash';
class CheckLocation extends Component {
    checklocation=()=>{
        if(this.props.blogsLocation.length==4&&this.props.blogsCurrentLocation.length!==0){
            const SortLatitude=[];
            const SortLongitude=[];
            this.props.blogsLocation
            .sort(({ latitude: previousLaitude }, { latitude: currentLaitude }) => previousLaitude - currentLaitude)
            .map((item)=>{
            SortLatitude.push(item.latitude)
            })
            this.props.blogsLocation
            .sort(({ longitude: previousLongitude }, { longitude: currentLongitude }) => previousLongitude - currentLongitude)
            .map((item)=>{
             SortLongitude.push(item.longitude)
            })
         if (this.props.blogsCurrentLocation[0].latitude>SortLatitude[0]&&
             this.props.blogsCurrentLocation[0].latitude<SortLatitude[3]&&
             this.props.blogsCurrentLocation[0].longitude>SortLongitude[0]&&
             this.props.blogsCurrentLocation[0].longitude<SortLongitude[3]) {
               alert('Your position is close to the scope of the company.')
           }else{
               alert('Your position is not close to the scope of the company.')}
        }else{alert('Please add location or getLocation')}
   }
    render() {
        return (
            <div>
                <Button size='small' variant="contained" color="secondary" onClick={()=>this.checklocation()}>Check-Location</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const blogsCurrentLocation = _.map(state.blogsCurrentLocation,(val, key) => {
        return {
          ...val,
          key: key,
        };
      },
    );
    const blogsLocation = _.map(state.blogsLocation,(val, key) => {
        return {
          ...val,
          key: key,
        };
      },
    );
    return {
        blogsCurrentLocation,blogsLocation
    };
}

export default connect(mapStateToProps)(CheckLocation);