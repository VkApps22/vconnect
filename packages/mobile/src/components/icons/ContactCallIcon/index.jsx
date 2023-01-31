import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function ContactCallIcon(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Circle cx={20} cy={20} r={20} fill="#E7EFEA" />
      <Path
        d="M26.667 22.925a9.506 9.506 0 01-2.975-.475.7.7 0 00-.259-.042.854.854 0 00-.591.242l-1.834 1.833a12.624 12.624 0 01-5.491-5.491l1.833-1.834a.836.836 0 00.208-.85 9.468 9.468 0 01-.475-2.975.836.836 0 00-.833-.833h-2.917a.836.836 0 00-.833.833c0 7.825 6.342 14.167 14.167 14.167a.836.836 0 00.833-.833v-2.909a.836.836 0 00-.833-.833zm-12.475-8.758h1.25c.058.741.183 1.466.383 2.158l-1 1c-.342-1-.558-2.058-.633-3.158zm11.641 11.641a12.851 12.851 0 01-3.166-.625l.991-.991c.709.2 1.434.325 2.167.375v1.241h.008zm-3.808-12h2.158L20 17.992l1.175 1.175 4.183-4.184v2.159h1.667v-5h-5v1.666z"
        fill="#0A6230"
      />
    </Svg>
  );
}

export default ContactCallIcon;
