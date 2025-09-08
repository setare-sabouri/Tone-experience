import { Center, Text3D } from '@react-three/drei';

export default function Title() {

    return (
            <Text3D
                font="./fonts/Courgette_Regular.json"
                size={1}
                height={0.05}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.01}
                bevelOffset={0}
                bevelSegments={5}
                position={[-5, 2, -2]}
                rotation={[0, 0, 0]}
            >
                Tone.js Experience
                <meshStandardMaterial color="#3a784a"/> 
            </Text3D>

    );
}
