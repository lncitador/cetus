/**
 * Interface for the controller.
 * @class Controller
 * @template T The type of the model.
 * @export { BaseController }
 */
export abstract class BaseController<R> {
  public abstract create?(...args: any): Promise<R>;

  public abstract all?(...args: any): Promise<R[]>;

  public abstract find?(...args: any): Promise<R>;

  public abstract patch?(...args: any): Promise<R>;

  public abstract delete?(...args: any): Promise<void>;
}
