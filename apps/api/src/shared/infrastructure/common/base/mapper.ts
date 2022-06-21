/**
 * @interface
 * @template I, O
 * @extends {Mapper<I, O>}
 * @classdesc Interface for Mapper.
 */
export abstract class Mapper<I, O> {
  /**
   * Map Dto to Entity
   * @param {I} dto - Dto
   * @returns {O} - Entity
   */
  abstract mapFrom(dto: I): O;

  /**
   * Map Entity to Dto
   * @param {O} entity - Entity
   * @returns {I} - Dto
   */
  abstract mapTo(entity: O): I;
}
