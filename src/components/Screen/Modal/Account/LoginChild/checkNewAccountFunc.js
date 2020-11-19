import firestore from '@react-native-firebase/firestore';

const USR_TB = firestore().collection('USR_TB');

const checkNewAccountFunc = (uid, callback) => {
  console.log('신규 유저인지 확인 시작:', uid);
  var isNew;
  USR_TB.where('uid', '==', uid)
    .get()
    .then((snst) => {
      if (snst._docs.uid == undefined) {
        console.log('신규 유저임');
        isNew = true;
      } else {
        console.log('기존 유저임', snst._docs);
        isNew = false;
      }
      callback(isNew);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default checkNewAccountFunc;
