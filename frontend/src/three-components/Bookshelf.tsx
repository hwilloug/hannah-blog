import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

interface BookshelfProps {
  rotation: [x: number, y: number, z: number];
  position: [x: number, y: number, z: number];
}

const Bookshelf: React.FC<BookshelfProps> = ({ rotation, position }) => {
  const shelfTexture = useLoader(
    THREE.TextureLoader,
    "/wood_bookshelf_texture.png",
  );
  const shelfColor = "brown";
  const bookTexture1 = useLoader(
    THREE.TextureLoader,
    "/book_spine_texture_1.jpeg",
  );
  const bookTexture2 = useLoader(
    THREE.TextureLoader,
    "/book_spine_texture_2.jpeg",
  );
  const bookTexture3 = useLoader(
    THREE.TextureLoader,
    "/book_spine_texture_3.jpeg",
  );
  const bookTexture4 = useLoader(
    THREE.TextureLoader,
    "/book_spine_texture_4.jpeg",
  );
  const bookTexture5 = useLoader(
    THREE.TextureLoader,
    "/book_spine_texture_5.jpeg",
  );
  const bookTexture6 = useLoader(
    THREE.TextureLoader,
    "/book_spine_texture_6.jpeg",
  );
  const bookTexture7 = useLoader(
    THREE.TextureLoader,
    "/book_spine_texture_7.jpeg",
  );

  const [bookPosition, setBookPosition] = useState<
    [x: number, y: number, z: number]
  >([-19.75, 9.5, 3]);

  return (
    <mesh castShadow receiveShadow rotation={rotation} position={position}>
      {/* Sides */}
      <mesh castShadow receiveShadow position={[-32, 0, 1.5]}>
        <boxGeometry args={[0.5, 30, 7]} />
        <meshStandardMaterial map={shelfTexture} color={shelfColor} />
      </mesh>
      <mesh castShadow receiveShadow position={[-12, 0, 1.5]}>
        <boxGeometry args={[0.5, 30, 7]} />
        <meshStandardMaterial map={shelfTexture} color={shelfColor} />
      </mesh>

      {/* Shelves */}
      <mesh castShadow receiveShadow position={[-22, -14, 1.5]}>
        <boxGeometry args={[20, 0.5, 7]} />
        <meshStandardMaterial map={shelfTexture} color={shelfColor} />
      </mesh>
      <mesh castShadow receiveShadow position={[-22, -7, 1.5]}>
        <boxGeometry args={[20, 0.5, 7]} />
        <meshStandardMaterial map={shelfTexture} color={shelfColor} />
      </mesh>
      <mesh castShadow receiveShadow position={[-22, 0, 1.5]}>
        <boxGeometry args={[20, 0.5, 7]} />
        <meshStandardMaterial map={shelfTexture} color={shelfColor} />
      </mesh>
      <mesh castShadow receiveShadow position={[-22, 7, 1.5]}>
        <boxGeometry args={[20, 0.5, 7]} />
        <meshStandardMaterial map={shelfTexture} color={shelfColor} />
      </mesh>
      <mesh castShadow receiveShadow position={[-22, 14, 1.5]}>
        <boxGeometry args={[20, 0.5, 7]} />
        <meshStandardMaterial map={shelfTexture} color={shelfColor} />
      </mesh>

      {/* Back */}
      <mesh castShadow receiveShadow position={[-22, 0, -2]}>
        <boxGeometry args={[20, 30, 0.5]} />
        <meshStandardMaterial map={shelfTexture} color={shelfColor} />
      </mesh>

      {/* Bottom Shelf Books */}
      <Book
        position={[-22, -11.5, 3]}
        colorMap={bookTexture3}
        width={1}
        height={5}
      />
      <Book
        position={[-23.5, -11, 3]}
        colorMap={bookTexture1}
        width={2}
        height={6}
      />
      <Book
        position={[-25.75, -12, 3]}
        colorMap={bookTexture4}
        width={2.5}
        height={4}
      />
      <Book
        position={[-27.25, -12.5, 3]}
        colorMap={bookTexture5}
        width={0.5}
        height={3}
      />
      <Book
        position={[-27.75, -12.5, 3]}
        colorMap={bookTexture3}
        width={0.5}
        height={3}
      />
      <Book
        position={[-28.25, -12.5, 3]}
        colorMap={bookTexture6}
        width={0.5}
        height={3}
      />
      <Book
        position={[-28.75, -12.5, 3]}
        colorMap={bookTexture7}
        width={0.5}
        height={3}
      />
      <Book
        position={[-29.5, -11.5, 3]}
        colorMap={bookTexture2}
        width={1}
        height={5}
      />
      <Book
        position={[-31, -11.5, 3]}
        colorMap={bookTexture5}
        width={2}
        height={5}
      />
      <Book
        position={[-13, -11.5, 3]}
        colorMap={bookTexture4}
        width={1.5}
        height={5}
      />
      <Book
        position={[-14, -12.5, 3]}
        colorMap={bookTexture6}
        width={0.5}
        height={3}
      />
      <Book
        position={[-14.5, -12.5, 3]}
        colorMap={bookTexture7}
        width={0.5}
        height={3}
      />

      {/* Bottom Middle Shelf Books */}
      <Book
        position={[-13, -4.5, 3]}
        colorMap={bookTexture3}
        width={1}
        height={5}
      />
      <Book
        position={[-14.5, -4, 3]}
        colorMap={bookTexture1}
        width={2}
        height={6}
      />
      <Book
        position={[-16.75, -5, 3]}
        colorMap={bookTexture5}
        width={2.5}
        height={4}
      />
      <Book
        position={[-18.25, -5.5, 3]}
        colorMap={bookTexture5}
        width={0.5}
        height={3}
      />
      <Book
        position={[-18.75, -5.5, 3]}
        colorMap={bookTexture3}
        width={0.5}
        height={3}
      />
      <Book
        position={[-19.25, -5.5, 3]}
        colorMap={bookTexture6}
        width={0.5}
        height={3}
      />
      <Book
        position={[-19.75, -5.5, 3]}
        colorMap={bookTexture7}
        width={0.5}
        height={3}
      />
      <Book
        position={[-20.5, -4.5, 3]}
        colorMap={bookTexture2}
        width={1}
        height={5}
      />
      <Book
        position={[-22.25, -5, 3]}
        colorMap={bookTexture6}
        width={2.5}
        height={4}
      />
      <Book
        position={[-31, -4.5, 3]}
        colorMap={bookTexture4}
        width={1.5}
        height={5}
      />
      <Book
        position={[-30, -5.5, 3]}
        colorMap={bookTexture6}
        width={0.5}
        height={3}
      />
      <Book
        position={[-29.5, -5.5, 3]}
        colorMap={bookTexture7}
        width={0.5}
        height={3}
      />

      {/* Top Shelf Books */}
      <Book
        position={[-22, 9.5, 3]}
        colorMap={bookTexture3}
        width={1}
        height={5}
      />
      <Book
        position={[-23.5, 10, 3]}
        colorMap={bookTexture1}
        width={2}
        height={6}
      />
      <Book
        position={[-25.75, 9, 3]}
        colorMap={bookTexture4}
        width={2.5}
        height={4}
      />
      <Book
        position={[-27.25, 8.5, 3]}
        colorMap={bookTexture5}
        width={0.5}
        height={3}
      />
      <Book
        position={[-27.75, 8.5, 3]}
        colorMap={bookTexture3}
        width={0.5}
        height={3}
      />
      <Book
        position={[-28.25, 8.5, 3]}
        colorMap={bookTexture6}
        width={0.5}
        height={3}
      />
      <Book
        position={[-28.75, 8.5, 3]}
        colorMap={bookTexture7}
        width={0.5}
        height={3}
      />
      <Book
        position={[-29.5, 9.5, 3]}
        colorMap={bookTexture2}
        width={1}
        height={5}
      />
      <Book
        position={[-31, 9.5, 3]}
        colorMap={bookTexture5}
        width={2}
        height={5}
      />
      <Book
        position={[-13, 9.5, 3]}
        colorMap={bookTexture4}
        width={1.5}
        height={5}
      />
      <Book
        position={[-14, 8.5, 3]}
        colorMap={bookTexture6}
        width={0.5}
        height={3}
      />
      <Book
        position={[-14.5, 8.5, 3]}
        colorMap={bookTexture7}
        width={0.5}
        height={3}
      />
      <Book
        position={[-15.75, 9.5, 3]}
        colorMap={bookTexture1}
        width={2}
        height={5}
      />
      <Book
        position={[-17.75, 9.5, 3]}
        colorMap={bookTexture4}
        width={2}
        height={5}
      />
      <Book
        position={bookPosition}
        colorMap={bookTexture7}
        width={2}
        height={5}
        onPointerEnter={() => setBookPosition([-19.75, 9.5, 4])}
        onPointerLeave={() => setBookPosition([-19.75, 9.5, 3])}
        onClick={() => (window.location.href = "/books")}
      />
      <Book
        position={[-21.1, 9.25, 3]}
        colorMap={bookTexture6}
        width={0.75}
        height={4}
      />

      {/* Top middle shelf knick-knacks */}
    </mesh>
  );
};

export default Bookshelf;

const Book = ({
  position,
  colorMap,
  width,
  height,
  onPointerEnter,
  onPointerLeave,
  onClick,
}: {
  position: [x: number, y: number, z: number];
  colorMap: THREE.Texture;
  width: number;
  height: number;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onClick?: () => void;
}) => {
  return (
    <mesh
      castShadow
      receiveShadow
      position={position}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <boxGeometry args={[width, height, 3]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
