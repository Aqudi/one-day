import { IonButton } from '@ionic/react'
import styled from 'styled-components';

// 방법1: https://ionicframework.com/docs/api/button 문서에 CSS Custom Properties를 참고한다.
const CircularButton = styled(IonButton)`
    --background: grey;
    --border-radius: 50%;
`

// // 방법2: &::part(native) { CSS } 를 사용한다.
// const CircularButton = styled(IonButton)`
//     &::part(native) {
//         background-color: red;
//         border-radius: 10px;
//     }
// `;

export default CircularButton
