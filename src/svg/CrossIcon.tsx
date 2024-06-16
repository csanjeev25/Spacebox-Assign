import React from 'react';
import {Svg, G, Path, Defs, Mask, Use} from 'react-native-svg';

export default function CrossIcon(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 12 12">
      <Defs>
        <Path
          id="8293fs366a"
          d="M.754 9.784c-.199.001-.39-.077-.532-.218C.08 9.426 0 9.234 0 9.034s.08-.392.222-.533l3.622-3.63L.222 1.234C-.031.934-.011.491.268.216c.28-.275.723-.29 1.019-.032l3.592 3.645L8.45.251c.294-.294.771-.294 1.065 0 .294.295.294.771 0 1.065L5.96 4.871l3.578 3.615c.212.185.304.474.236.747-.068.274-.284.486-.558.55-.274.064-.561-.031-.743-.247L4.879 5.951 1.287 9.566c-.142.14-.333.22-.533.218z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G>
          <G>
            <G>
              <G>
                <G transform="translate(-322.000000, -22.000000) translate(16.000000, 12.000000) translate(296.000000, 0.000000) translate(10.000000, 10.000000) translate(1.125000, 1.125000)">
                  <Mask id="6ro076513b" fill="#fff">
                    <Use xlinkHref="#8293fs366a" />
                  </Mask>
                  <Use
                    fill="#6F6F70"
                    fillRule="nonzero"
                    xlinkHref="#8293fs366a"
                  />
                  <G fill="#6F6F6F" mask="url(#6ro076513b)">
                    <Path
                      d="M0 0L12 0 12 12 0 12z"
                      transform="translate(-1.125000, -1.125000)"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}
