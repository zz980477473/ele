// const data = (state = {
//   bannerlist: [1, 2, 3],
//   prolist: [],
//   city: '',
//   point: []
// }, action) => {
//   const { type, data } = action;
//   switch (type) {
//     case 'CHANGE_BANNER':
//       state = {
//         bannerlist: data,
//         prolist: state.prolist,
//         city: state.city,
//         point: state.point
//       }
//       // return {...state, bannerlist: data} // 简写形式
//     case 'CHANGE_PROLIST':
//       // state = {
//       //   bannerlist: state.bannerlist,
//       //   prolist: data
//       // }
//       // return {...state, prolist: data}  // 简写形式
//       return Object.assign({}, state, {prolist:data})
//     default:
//       return state
//   }
// }

// export default data;
