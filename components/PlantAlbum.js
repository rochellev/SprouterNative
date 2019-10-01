import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// const SLIDER_1_FIRST_ITEM = 1;
// const IS_ANDROID = Platform.OS === 'android';

// export default class PlantCarousel extends React.Component{

//   constructor (props) {
//     super(props);
//     this.state = {
//         slider1ActiveSlide: SLIDER_1_FIRST_ITEM
//     };
// }

//   _renderItem ({item, index}) {
//     return (
//         <View style={styles.slide}>
//             <Text style={styles.title}>{ item.title }</Text>
//         </View>
//     );
// }

// render () {
//     return (
//         <Carousel
//           ref={(c) => { this._carousel = c; }}
//           data={this.state.entries}
//           renderItem={this._renderItem}
//           sliderWidth={sliderWidth}
//           itemWidth={itemWidth}
//         />
//     );
// }
// }