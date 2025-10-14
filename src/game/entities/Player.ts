import Entity from "./Entity";

export default class Player extends Entity {
    public init(): void {
        this.scene.add.shader("fire")
    }
}