export const Vector2 = (x, y) => { return { x: x || 0, y: y || (x || 0) }; };
export const MutVec2 = (vec, mut) => { return Vector2(vec.x * mut, vec.y * mut); };
export const SumVec2 = (vec, sum) => { return Vector2(vec.x + sum, vec.y + sum); };
export const Vector4 = (x, y, w, z) => { return { x: x, y: y, w: w, z: z }; };