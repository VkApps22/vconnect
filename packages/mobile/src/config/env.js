import { Platform } from 'react-native';

const HOST_ADDRESS =
  process.env.REACT_NATIVE_HOST_ADDRESS ||
  `${Platform.OS === 'android' ? 'https://vconnectplatform.com' : 'https://vconnectplatform.com'}:8443`;
  

const FB_APP_ID = process.env.REACT_NATIVE_FB_APP_ID || '1067192480465819';

const LN_APP_ID = process.env.REACT_NATIVE_LN_APP_ID || '779zvhm4srbatp';

const NATIVE_REDIRECT_URI =
  process.env.REACT_NATIVE_NATIVE_REDIRECT_URI ||
  'https://vconnectplatform.com/authorize';

export default {
  HOST_ADDRESS,

  FB_APP_ID,

  LN_APP_ID,

  NATIVE_REDIRECT_URI,
};
