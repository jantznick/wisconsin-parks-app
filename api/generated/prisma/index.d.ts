
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Park
 * 
 */
export type Park = $Result.DefaultSelection<Prisma.$ParkPayload>
/**
 * Model Coordinate
 * 
 */
export type Coordinate = $Result.DefaultSelection<Prisma.$CoordinatePayload>
/**
 * Model Hours
 * 
 */
export type Hours = $Result.DefaultSelection<Prisma.$HoursPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model EntranceFee
 * 
 */
export type EntranceFee = $Result.DefaultSelection<Prisma.$EntranceFeePayload>
/**
 * Model Parking
 * 
 */
export type Parking = $Result.DefaultSelection<Prisma.$ParkingPayload>
/**
 * Model SeasonalInfo
 * 
 */
export type SeasonalInfo = $Result.DefaultSelection<Prisma.$SeasonalInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Parks
 * const parks = await prisma.park.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Parks
   * const parks = await prisma.park.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.park`: Exposes CRUD operations for the **Park** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parks
    * const parks = await prisma.park.findMany()
    * ```
    */
  get park(): Prisma.ParkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coordinate`: Exposes CRUD operations for the **Coordinate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coordinates
    * const coordinates = await prisma.coordinate.findMany()
    * ```
    */
  get coordinate(): Prisma.CoordinateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hours`: Exposes CRUD operations for the **Hours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hours
    * const hours = await prisma.hours.findMany()
    * ```
    */
  get hours(): Prisma.HoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entranceFee`: Exposes CRUD operations for the **EntranceFee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntranceFees
    * const entranceFees = await prisma.entranceFee.findMany()
    * ```
    */
  get entranceFee(): Prisma.EntranceFeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parking`: Exposes CRUD operations for the **Parking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parkings
    * const parkings = await prisma.parking.findMany()
    * ```
    */
  get parking(): Prisma.ParkingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seasonalInfo`: Exposes CRUD operations for the **SeasonalInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeasonalInfos
    * const seasonalInfos = await prisma.seasonalInfo.findMany()
    * ```
    */
  get seasonalInfo(): Prisma.SeasonalInfoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Park: 'Park',
    Coordinate: 'Coordinate',
    Hours: 'Hours',
    Contact: 'Contact',
    EntranceFee: 'EntranceFee',
    Parking: 'Parking',
    SeasonalInfo: 'SeasonalInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "park" | "coordinate" | "hours" | "contact" | "entranceFee" | "parking" | "seasonalInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Park: {
        payload: Prisma.$ParkPayload<ExtArgs>
        fields: Prisma.ParkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          findFirst: {
            args: Prisma.ParkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          findMany: {
            args: Prisma.ParkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>[]
          }
          create: {
            args: Prisma.ParkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          createMany: {
            args: Prisma.ParkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>[]
          }
          delete: {
            args: Prisma.ParkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          update: {
            args: Prisma.ParkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          deleteMany: {
            args: Prisma.ParkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>[]
          }
          upsert: {
            args: Prisma.ParkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          aggregate: {
            args: Prisma.ParkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePark>
          }
          groupBy: {
            args: Prisma.ParkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkCountArgs<ExtArgs>
            result: $Utils.Optional<ParkCountAggregateOutputType> | number
          }
        }
      }
      Coordinate: {
        payload: Prisma.$CoordinatePayload<ExtArgs>
        fields: Prisma.CoordinateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoordinateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoordinateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          findFirst: {
            args: Prisma.CoordinateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoordinateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          findMany: {
            args: Prisma.CoordinateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>[]
          }
          create: {
            args: Prisma.CoordinateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          createMany: {
            args: Prisma.CoordinateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoordinateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>[]
          }
          delete: {
            args: Prisma.CoordinateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          update: {
            args: Prisma.CoordinateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          deleteMany: {
            args: Prisma.CoordinateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoordinateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoordinateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>[]
          }
          upsert: {
            args: Prisma.CoordinateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          aggregate: {
            args: Prisma.CoordinateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoordinate>
          }
          groupBy: {
            args: Prisma.CoordinateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoordinateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoordinateCountArgs<ExtArgs>
            result: $Utils.Optional<CoordinateCountAggregateOutputType> | number
          }
        }
      }
      Hours: {
        payload: Prisma.$HoursPayload<ExtArgs>
        fields: Prisma.HoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>
          }
          findFirst: {
            args: Prisma.HoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>
          }
          findMany: {
            args: Prisma.HoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>[]
          }
          create: {
            args: Prisma.HoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>
          }
          createMany: {
            args: Prisma.HoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>[]
          }
          delete: {
            args: Prisma.HoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>
          }
          update: {
            args: Prisma.HoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>
          }
          deleteMany: {
            args: Prisma.HoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>[]
          }
          upsert: {
            args: Prisma.HoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursPayload>
          }
          aggregate: {
            args: Prisma.HoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHours>
          }
          groupBy: {
            args: Prisma.HoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoursCountArgs<ExtArgs>
            result: $Utils.Optional<HoursCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      EntranceFee: {
        payload: Prisma.$EntranceFeePayload<ExtArgs>
        fields: Prisma.EntranceFeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntranceFeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntranceFeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>
          }
          findFirst: {
            args: Prisma.EntranceFeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntranceFeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>
          }
          findMany: {
            args: Prisma.EntranceFeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>[]
          }
          create: {
            args: Prisma.EntranceFeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>
          }
          createMany: {
            args: Prisma.EntranceFeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntranceFeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>[]
          }
          delete: {
            args: Prisma.EntranceFeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>
          }
          update: {
            args: Prisma.EntranceFeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>
          }
          deleteMany: {
            args: Prisma.EntranceFeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntranceFeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntranceFeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>[]
          }
          upsert: {
            args: Prisma.EntranceFeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntranceFeePayload>
          }
          aggregate: {
            args: Prisma.EntranceFeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntranceFee>
          }
          groupBy: {
            args: Prisma.EntranceFeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntranceFeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntranceFeeCountArgs<ExtArgs>
            result: $Utils.Optional<EntranceFeeCountAggregateOutputType> | number
          }
        }
      }
      Parking: {
        payload: Prisma.$ParkingPayload<ExtArgs>
        fields: Prisma.ParkingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findFirst: {
            args: Prisma.ParkingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findMany: {
            args: Prisma.ParkingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          create: {
            args: Prisma.ParkingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          createMany: {
            args: Prisma.ParkingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          delete: {
            args: Prisma.ParkingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          update: {
            args: Prisma.ParkingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          deleteMany: {
            args: Prisma.ParkingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          upsert: {
            args: Prisma.ParkingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          aggregate: {
            args: Prisma.ParkingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParking>
          }
          groupBy: {
            args: Prisma.ParkingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingCountAggregateOutputType> | number
          }
        }
      }
      SeasonalInfo: {
        payload: Prisma.$SeasonalInfoPayload<ExtArgs>
        fields: Prisma.SeasonalInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonalInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonalInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>
          }
          findFirst: {
            args: Prisma.SeasonalInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonalInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>
          }
          findMany: {
            args: Prisma.SeasonalInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>[]
          }
          create: {
            args: Prisma.SeasonalInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>
          }
          createMany: {
            args: Prisma.SeasonalInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonalInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>[]
          }
          delete: {
            args: Prisma.SeasonalInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>
          }
          update: {
            args: Prisma.SeasonalInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>
          }
          deleteMany: {
            args: Prisma.SeasonalInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonalInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonalInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>[]
          }
          upsert: {
            args: Prisma.SeasonalInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonalInfoPayload>
          }
          aggregate: {
            args: Prisma.SeasonalInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeasonalInfo>
          }
          groupBy: {
            args: Prisma.SeasonalInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonalInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonalInfoCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonalInfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    park?: ParkOmit
    coordinate?: CoordinateOmit
    hours?: HoursOmit
    contact?: ContactOmit
    entranceFee?: EntranceFeeOmit
    parking?: ParkingOmit
    seasonalInfo?: SeasonalInfoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Park
   */

  export type AggregatePark = {
    _count: ParkCountAggregateOutputType | null
    _avg: ParkAvgAggregateOutputType | null
    _sum: ParkSumAggregateOutputType | null
    _min: ParkMinAggregateOutputType | null
    _max: ParkMaxAggregateOutputType | null
  }

  export type ParkAvgAggregateOutputType = {
    activities: number | null
  }

  export type ParkSumAggregateOutputType = {
    activities: number[]
  }

  export type ParkMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isDogFriendly: boolean | null
    isAccessible: boolean | null
    image_from_listing: string | null
    downloaded_image_path: string | null
    info_url: string | null
    recreation_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isDogFriendly: boolean | null
    isAccessible: boolean | null
    image_from_listing: string | null
    downloaded_image_path: string | null
    info_url: string | null
    recreation_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkCountAggregateOutputType = {
    id: number
    name: number
    description: number
    activities: number
    facilities: number
    rules: number
    isDogFriendly: number
    isAccessible: number
    image_from_listing: number
    downloaded_image_path: number
    info_url: number
    recreation_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkAvgAggregateInputType = {
    activities?: true
  }

  export type ParkSumAggregateInputType = {
    activities?: true
  }

  export type ParkMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isDogFriendly?: true
    isAccessible?: true
    image_from_listing?: true
    downloaded_image_path?: true
    info_url?: true
    recreation_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isDogFriendly?: true
    isAccessible?: true
    image_from_listing?: true
    downloaded_image_path?: true
    info_url?: true
    recreation_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    activities?: true
    facilities?: true
    rules?: true
    isDogFriendly?: true
    isAccessible?: true
    image_from_listing?: true
    downloaded_image_path?: true
    info_url?: true
    recreation_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Park to aggregate.
     */
    where?: ParkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParkOrderByWithRelationInput | ParkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parks
    **/
    _count?: true | ParkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkMaxAggregateInputType
  }

  export type GetParkAggregateType<T extends ParkAggregateArgs> = {
        [P in keyof T & keyof AggregatePark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePark[P]>
      : GetScalarType<T[P], AggregatePark[P]>
  }




  export type ParkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkWhereInput
    orderBy?: ParkOrderByWithAggregationInput | ParkOrderByWithAggregationInput[]
    by: ParkScalarFieldEnum[] | ParkScalarFieldEnum
    having?: ParkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkCountAggregateInputType | true
    _avg?: ParkAvgAggregateInputType
    _sum?: ParkSumAggregateInputType
    _min?: ParkMinAggregateInputType
    _max?: ParkMaxAggregateInputType
  }

  export type ParkGroupByOutputType = {
    id: string
    name: string
    description: string | null
    activities: number[]
    facilities: string[]
    rules: string[]
    isDogFriendly: boolean | null
    isAccessible: boolean | null
    image_from_listing: string | null
    downloaded_image_path: string | null
    info_url: string | null
    recreation_url: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParkCountAggregateOutputType | null
    _avg: ParkAvgAggregateOutputType | null
    _sum: ParkSumAggregateOutputType | null
    _min: ParkMinAggregateOutputType | null
    _max: ParkMaxAggregateOutputType | null
  }

  type GetParkGroupByPayload<T extends ParkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkGroupByOutputType[P]>
            : GetScalarType<T[P], ParkGroupByOutputType[P]>
        }
      >
    >


  export type ParkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    activities?: boolean
    facilities?: boolean
    rules?: boolean
    isDogFriendly?: boolean
    isAccessible?: boolean
    image_from_listing?: boolean
    downloaded_image_path?: boolean
    info_url?: boolean
    recreation_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coordinate?: boolean | Park$coordinateArgs<ExtArgs>
    hours?: boolean | Park$hoursArgs<ExtArgs>
    contact?: boolean | Park$contactArgs<ExtArgs>
    entranceFee?: boolean | Park$entranceFeeArgs<ExtArgs>
    parking?: boolean | Park$parkingArgs<ExtArgs>
    seasonalInfo?: boolean | Park$seasonalInfoArgs<ExtArgs>
  }, ExtArgs["result"]["park"]>

  export type ParkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    activities?: boolean
    facilities?: boolean
    rules?: boolean
    isDogFriendly?: boolean
    isAccessible?: boolean
    image_from_listing?: boolean
    downloaded_image_path?: boolean
    info_url?: boolean
    recreation_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["park"]>

  export type ParkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    activities?: boolean
    facilities?: boolean
    rules?: boolean
    isDogFriendly?: boolean
    isAccessible?: boolean
    image_from_listing?: boolean
    downloaded_image_path?: boolean
    info_url?: boolean
    recreation_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["park"]>

  export type ParkSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    activities?: boolean
    facilities?: boolean
    rules?: boolean
    isDogFriendly?: boolean
    isAccessible?: boolean
    image_from_listing?: boolean
    downloaded_image_path?: boolean
    info_url?: boolean
    recreation_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "activities" | "facilities" | "rules" | "isDogFriendly" | "isAccessible" | "image_from_listing" | "downloaded_image_path" | "info_url" | "recreation_url" | "createdAt" | "updatedAt", ExtArgs["result"]["park"]>
  export type ParkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coordinate?: boolean | Park$coordinateArgs<ExtArgs>
    hours?: boolean | Park$hoursArgs<ExtArgs>
    contact?: boolean | Park$contactArgs<ExtArgs>
    entranceFee?: boolean | Park$entranceFeeArgs<ExtArgs>
    parking?: boolean | Park$parkingArgs<ExtArgs>
    seasonalInfo?: boolean | Park$seasonalInfoArgs<ExtArgs>
  }
  export type ParkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Park"
    objects: {
      coordinate: Prisma.$CoordinatePayload<ExtArgs> | null
      hours: Prisma.$HoursPayload<ExtArgs> | null
      contact: Prisma.$ContactPayload<ExtArgs> | null
      entranceFee: Prisma.$EntranceFeePayload<ExtArgs> | null
      parking: Prisma.$ParkingPayload<ExtArgs> | null
      seasonalInfo: Prisma.$SeasonalInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      activities: number[]
      facilities: string[]
      rules: string[]
      isDogFriendly: boolean | null
      isAccessible: boolean | null
      image_from_listing: string | null
      downloaded_image_path: string | null
      info_url: string | null
      recreation_url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["park"]>
    composites: {}
  }

  type ParkGetPayload<S extends boolean | null | undefined | ParkDefaultArgs> = $Result.GetResult<Prisma.$ParkPayload, S>

  type ParkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkCountAggregateInputType | true
    }

  export interface ParkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Park'], meta: { name: 'Park' } }
    /**
     * Find zero or one Park that matches the filter.
     * @param {ParkFindUniqueArgs} args - Arguments to find a Park
     * @example
     * // Get one Park
     * const park = await prisma.park.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkFindUniqueArgs>(args: SelectSubset<T, ParkFindUniqueArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Park that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkFindUniqueOrThrowArgs} args - Arguments to find a Park
     * @example
     * // Get one Park
     * const park = await prisma.park.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Park that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkFindFirstArgs} args - Arguments to find a Park
     * @example
     * // Get one Park
     * const park = await prisma.park.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkFindFirstArgs>(args?: SelectSubset<T, ParkFindFirstArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Park that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkFindFirstOrThrowArgs} args - Arguments to find a Park
     * @example
     * // Get one Park
     * const park = await prisma.park.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parks
     * const parks = await prisma.park.findMany()
     * 
     * // Get first 10 Parks
     * const parks = await prisma.park.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkWithIdOnly = await prisma.park.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkFindManyArgs>(args?: SelectSubset<T, ParkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Park.
     * @param {ParkCreateArgs} args - Arguments to create a Park.
     * @example
     * // Create one Park
     * const Park = await prisma.park.create({
     *   data: {
     *     // ... data to create a Park
     *   }
     * })
     * 
     */
    create<T extends ParkCreateArgs>(args: SelectSubset<T, ParkCreateArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parks.
     * @param {ParkCreateManyArgs} args - Arguments to create many Parks.
     * @example
     * // Create many Parks
     * const park = await prisma.park.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkCreateManyArgs>(args?: SelectSubset<T, ParkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parks and returns the data saved in the database.
     * @param {ParkCreateManyAndReturnArgs} args - Arguments to create many Parks.
     * @example
     * // Create many Parks
     * const park = await prisma.park.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parks and only return the `id`
     * const parkWithIdOnly = await prisma.park.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Park.
     * @param {ParkDeleteArgs} args - Arguments to delete one Park.
     * @example
     * // Delete one Park
     * const Park = await prisma.park.delete({
     *   where: {
     *     // ... filter to delete one Park
     *   }
     * })
     * 
     */
    delete<T extends ParkDeleteArgs>(args: SelectSubset<T, ParkDeleteArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Park.
     * @param {ParkUpdateArgs} args - Arguments to update one Park.
     * @example
     * // Update one Park
     * const park = await prisma.park.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkUpdateArgs>(args: SelectSubset<T, ParkUpdateArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parks.
     * @param {ParkDeleteManyArgs} args - Arguments to filter Parks to delete.
     * @example
     * // Delete a few Parks
     * const { count } = await prisma.park.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkDeleteManyArgs>(args?: SelectSubset<T, ParkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parks
     * const park = await prisma.park.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkUpdateManyArgs>(args: SelectSubset<T, ParkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parks and returns the data updated in the database.
     * @param {ParkUpdateManyAndReturnArgs} args - Arguments to update many Parks.
     * @example
     * // Update many Parks
     * const park = await prisma.park.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parks and only return the `id`
     * const parkWithIdOnly = await prisma.park.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Park.
     * @param {ParkUpsertArgs} args - Arguments to update or create a Park.
     * @example
     * // Update or create a Park
     * const park = await prisma.park.upsert({
     *   create: {
     *     // ... data to create a Park
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Park we want to update
     *   }
     * })
     */
    upsert<T extends ParkUpsertArgs>(args: SelectSubset<T, ParkUpsertArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkCountArgs} args - Arguments to filter Parks to count.
     * @example
     * // Count the number of Parks
     * const count = await prisma.park.count({
     *   where: {
     *     // ... the filter for the Parks we want to count
     *   }
     * })
    **/
    count<T extends ParkCountArgs>(
      args?: Subset<T, ParkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Park.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkAggregateArgs>(args: Subset<T, ParkAggregateArgs>): Prisma.PrismaPromise<GetParkAggregateType<T>>

    /**
     * Group by Park.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkGroupByArgs['orderBy'] }
        : { orderBy?: ParkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Park model
   */
  readonly fields: ParkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Park.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coordinate<T extends Park$coordinateArgs<ExtArgs> = {}>(args?: Subset<T, Park$coordinateArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hours<T extends Park$hoursArgs<ExtArgs> = {}>(args?: Subset<T, Park$hoursArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contact<T extends Park$contactArgs<ExtArgs> = {}>(args?: Subset<T, Park$contactArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entranceFee<T extends Park$entranceFeeArgs<ExtArgs> = {}>(args?: Subset<T, Park$entranceFeeArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parking<T extends Park$parkingArgs<ExtArgs> = {}>(args?: Subset<T, Park$parkingArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seasonalInfo<T extends Park$seasonalInfoArgs<ExtArgs> = {}>(args?: Subset<T, Park$seasonalInfoArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Park model
   */
  interface ParkFieldRefs {
    readonly id: FieldRef<"Park", 'String'>
    readonly name: FieldRef<"Park", 'String'>
    readonly description: FieldRef<"Park", 'String'>
    readonly activities: FieldRef<"Park", 'Int[]'>
    readonly facilities: FieldRef<"Park", 'String[]'>
    readonly rules: FieldRef<"Park", 'String[]'>
    readonly isDogFriendly: FieldRef<"Park", 'Boolean'>
    readonly isAccessible: FieldRef<"Park", 'Boolean'>
    readonly image_from_listing: FieldRef<"Park", 'String'>
    readonly downloaded_image_path: FieldRef<"Park", 'String'>
    readonly info_url: FieldRef<"Park", 'String'>
    readonly recreation_url: FieldRef<"Park", 'String'>
    readonly createdAt: FieldRef<"Park", 'DateTime'>
    readonly updatedAt: FieldRef<"Park", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Park findUnique
   */
  export type ParkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Park to fetch.
     */
    where: ParkWhereUniqueInput
  }

  /**
   * Park findUniqueOrThrow
   */
  export type ParkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Park to fetch.
     */
    where: ParkWhereUniqueInput
  }

  /**
   * Park findFirst
   */
  export type ParkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Park to fetch.
     */
    where?: ParkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParkOrderByWithRelationInput | ParkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parks.
     */
    cursor?: ParkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parks.
     */
    distinct?: ParkScalarFieldEnum | ParkScalarFieldEnum[]
  }

  /**
   * Park findFirstOrThrow
   */
  export type ParkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Park to fetch.
     */
    where?: ParkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParkOrderByWithRelationInput | ParkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parks.
     */
    cursor?: ParkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parks.
     */
    distinct?: ParkScalarFieldEnum | ParkScalarFieldEnum[]
  }

  /**
   * Park findMany
   */
  export type ParkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Parks to fetch.
     */
    where?: ParkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParkOrderByWithRelationInput | ParkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parks.
     */
    cursor?: ParkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    distinct?: ParkScalarFieldEnum | ParkScalarFieldEnum[]
  }

  /**
   * Park create
   */
  export type ParkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * The data needed to create a Park.
     */
    data: XOR<ParkCreateInput, ParkUncheckedCreateInput>
  }

  /**
   * Park createMany
   */
  export type ParkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parks.
     */
    data: ParkCreateManyInput | ParkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Park createManyAndReturn
   */
  export type ParkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * The data used to create many Parks.
     */
    data: ParkCreateManyInput | ParkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Park update
   */
  export type ParkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * The data needed to update a Park.
     */
    data: XOR<ParkUpdateInput, ParkUncheckedUpdateInput>
    /**
     * Choose, which Park to update.
     */
    where: ParkWhereUniqueInput
  }

  /**
   * Park updateMany
   */
  export type ParkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parks.
     */
    data: XOR<ParkUpdateManyMutationInput, ParkUncheckedUpdateManyInput>
    /**
     * Filter which Parks to update
     */
    where?: ParkWhereInput
    /**
     * Limit how many Parks to update.
     */
    limit?: number
  }

  /**
   * Park updateManyAndReturn
   */
  export type ParkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * The data used to update Parks.
     */
    data: XOR<ParkUpdateManyMutationInput, ParkUncheckedUpdateManyInput>
    /**
     * Filter which Parks to update
     */
    where?: ParkWhereInput
    /**
     * Limit how many Parks to update.
     */
    limit?: number
  }

  /**
   * Park upsert
   */
  export type ParkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * The filter to search for the Park to update in case it exists.
     */
    where: ParkWhereUniqueInput
    /**
     * In case the Park found by the `where` argument doesn't exist, create a new Park with this data.
     */
    create: XOR<ParkCreateInput, ParkUncheckedCreateInput>
    /**
     * In case the Park was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkUpdateInput, ParkUncheckedUpdateInput>
  }

  /**
   * Park delete
   */
  export type ParkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter which Park to delete.
     */
    where: ParkWhereUniqueInput
  }

  /**
   * Park deleteMany
   */
  export type ParkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parks to delete
     */
    where?: ParkWhereInput
    /**
     * Limit how many Parks to delete.
     */
    limit?: number
  }

  /**
   * Park.coordinate
   */
  export type Park$coordinateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    where?: CoordinateWhereInput
  }

  /**
   * Park.hours
   */
  export type Park$hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    where?: HoursWhereInput
  }

  /**
   * Park.contact
   */
  export type Park$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
  }

  /**
   * Park.entranceFee
   */
  export type Park$entranceFeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    where?: EntranceFeeWhereInput
  }

  /**
   * Park.parking
   */
  export type Park$parkingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    where?: ParkingWhereInput
  }

  /**
   * Park.seasonalInfo
   */
  export type Park$seasonalInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    where?: SeasonalInfoWhereInput
  }

  /**
   * Park without action
   */
  export type ParkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Park
     */
    omit?: ParkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInclude<ExtArgs> | null
  }


  /**
   * Model Coordinate
   */

  export type AggregateCoordinate = {
    _count: CoordinateCountAggregateOutputType | null
    _avg: CoordinateAvgAggregateOutputType | null
    _sum: CoordinateSumAggregateOutputType | null
    _min: CoordinateMinAggregateOutputType | null
    _max: CoordinateMaxAggregateOutputType | null
  }

  export type CoordinateAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type CoordinateSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type CoordinateMinAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    parkId: string | null
  }

  export type CoordinateMaxAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    parkId: string | null
  }

  export type CoordinateCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    parkId: number
    _all: number
  }


  export type CoordinateAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type CoordinateSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type CoordinateMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    parkId?: true
  }

  export type CoordinateMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    parkId?: true
  }

  export type CoordinateCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    parkId?: true
    _all?: true
  }

  export type CoordinateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinate to aggregate.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coordinates
    **/
    _count?: true | CoordinateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoordinateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoordinateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoordinateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoordinateMaxAggregateInputType
  }

  export type GetCoordinateAggregateType<T extends CoordinateAggregateArgs> = {
        [P in keyof T & keyof AggregateCoordinate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoordinate[P]>
      : GetScalarType<T[P], AggregateCoordinate[P]>
  }




  export type CoordinateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoordinateWhereInput
    orderBy?: CoordinateOrderByWithAggregationInput | CoordinateOrderByWithAggregationInput[]
    by: CoordinateScalarFieldEnum[] | CoordinateScalarFieldEnum
    having?: CoordinateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoordinateCountAggregateInputType | true
    _avg?: CoordinateAvgAggregateInputType
    _sum?: CoordinateSumAggregateInputType
    _min?: CoordinateMinAggregateInputType
    _max?: CoordinateMaxAggregateInputType
  }

  export type CoordinateGroupByOutputType = {
    id: string
    latitude: number | null
    longitude: number | null
    parkId: string
    _count: CoordinateCountAggregateOutputType | null
    _avg: CoordinateAvgAggregateOutputType | null
    _sum: CoordinateSumAggregateOutputType | null
    _min: CoordinateMinAggregateOutputType | null
    _max: CoordinateMaxAggregateOutputType | null
  }

  type GetCoordinateGroupByPayload<T extends CoordinateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoordinateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoordinateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoordinateGroupByOutputType[P]>
            : GetScalarType<T[P], CoordinateGroupByOutputType[P]>
        }
      >
    >


  export type CoordinateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coordinate"]>

  export type CoordinateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coordinate"]>

  export type CoordinateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coordinate"]>

  export type CoordinateSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    parkId?: boolean
  }

  export type CoordinateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latitude" | "longitude" | "parkId", ExtArgs["result"]["coordinate"]>
  export type CoordinateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type CoordinateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type CoordinateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }

  export type $CoordinatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coordinate"
    objects: {
      park: Prisma.$ParkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      latitude: number | null
      longitude: number | null
      parkId: string
    }, ExtArgs["result"]["coordinate"]>
    composites: {}
  }

  type CoordinateGetPayload<S extends boolean | null | undefined | CoordinateDefaultArgs> = $Result.GetResult<Prisma.$CoordinatePayload, S>

  type CoordinateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoordinateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoordinateCountAggregateInputType | true
    }

  export interface CoordinateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coordinate'], meta: { name: 'Coordinate' } }
    /**
     * Find zero or one Coordinate that matches the filter.
     * @param {CoordinateFindUniqueArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoordinateFindUniqueArgs>(args: SelectSubset<T, CoordinateFindUniqueArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coordinate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoordinateFindUniqueOrThrowArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoordinateFindUniqueOrThrowArgs>(args: SelectSubset<T, CoordinateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindFirstArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoordinateFindFirstArgs>(args?: SelectSubset<T, CoordinateFindFirstArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindFirstOrThrowArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoordinateFindFirstOrThrowArgs>(args?: SelectSubset<T, CoordinateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coordinates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coordinates
     * const coordinates = await prisma.coordinate.findMany()
     * 
     * // Get first 10 Coordinates
     * const coordinates = await prisma.coordinate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coordinateWithIdOnly = await prisma.coordinate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoordinateFindManyArgs>(args?: SelectSubset<T, CoordinateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coordinate.
     * @param {CoordinateCreateArgs} args - Arguments to create a Coordinate.
     * @example
     * // Create one Coordinate
     * const Coordinate = await prisma.coordinate.create({
     *   data: {
     *     // ... data to create a Coordinate
     *   }
     * })
     * 
     */
    create<T extends CoordinateCreateArgs>(args: SelectSubset<T, CoordinateCreateArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coordinates.
     * @param {CoordinateCreateManyArgs} args - Arguments to create many Coordinates.
     * @example
     * // Create many Coordinates
     * const coordinate = await prisma.coordinate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoordinateCreateManyArgs>(args?: SelectSubset<T, CoordinateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coordinates and returns the data saved in the database.
     * @param {CoordinateCreateManyAndReturnArgs} args - Arguments to create many Coordinates.
     * @example
     * // Create many Coordinates
     * const coordinate = await prisma.coordinate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coordinates and only return the `id`
     * const coordinateWithIdOnly = await prisma.coordinate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoordinateCreateManyAndReturnArgs>(args?: SelectSubset<T, CoordinateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coordinate.
     * @param {CoordinateDeleteArgs} args - Arguments to delete one Coordinate.
     * @example
     * // Delete one Coordinate
     * const Coordinate = await prisma.coordinate.delete({
     *   where: {
     *     // ... filter to delete one Coordinate
     *   }
     * })
     * 
     */
    delete<T extends CoordinateDeleteArgs>(args: SelectSubset<T, CoordinateDeleteArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coordinate.
     * @param {CoordinateUpdateArgs} args - Arguments to update one Coordinate.
     * @example
     * // Update one Coordinate
     * const coordinate = await prisma.coordinate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoordinateUpdateArgs>(args: SelectSubset<T, CoordinateUpdateArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coordinates.
     * @param {CoordinateDeleteManyArgs} args - Arguments to filter Coordinates to delete.
     * @example
     * // Delete a few Coordinates
     * const { count } = await prisma.coordinate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoordinateDeleteManyArgs>(args?: SelectSubset<T, CoordinateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coordinates
     * const coordinate = await prisma.coordinate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoordinateUpdateManyArgs>(args: SelectSubset<T, CoordinateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinates and returns the data updated in the database.
     * @param {CoordinateUpdateManyAndReturnArgs} args - Arguments to update many Coordinates.
     * @example
     * // Update many Coordinates
     * const coordinate = await prisma.coordinate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coordinates and only return the `id`
     * const coordinateWithIdOnly = await prisma.coordinate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoordinateUpdateManyAndReturnArgs>(args: SelectSubset<T, CoordinateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coordinate.
     * @param {CoordinateUpsertArgs} args - Arguments to update or create a Coordinate.
     * @example
     * // Update or create a Coordinate
     * const coordinate = await prisma.coordinate.upsert({
     *   create: {
     *     // ... data to create a Coordinate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coordinate we want to update
     *   }
     * })
     */
    upsert<T extends CoordinateUpsertArgs>(args: SelectSubset<T, CoordinateUpsertArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateCountArgs} args - Arguments to filter Coordinates to count.
     * @example
     * // Count the number of Coordinates
     * const count = await prisma.coordinate.count({
     *   where: {
     *     // ... the filter for the Coordinates we want to count
     *   }
     * })
    **/
    count<T extends CoordinateCountArgs>(
      args?: Subset<T, CoordinateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoordinateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coordinate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoordinateAggregateArgs>(args: Subset<T, CoordinateAggregateArgs>): Prisma.PrismaPromise<GetCoordinateAggregateType<T>>

    /**
     * Group by Coordinate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoordinateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoordinateGroupByArgs['orderBy'] }
        : { orderBy?: CoordinateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoordinateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoordinateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coordinate model
   */
  readonly fields: CoordinateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coordinate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoordinateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    park<T extends ParkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkDefaultArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coordinate model
   */
  interface CoordinateFieldRefs {
    readonly id: FieldRef<"Coordinate", 'String'>
    readonly latitude: FieldRef<"Coordinate", 'Float'>
    readonly longitude: FieldRef<"Coordinate", 'Float'>
    readonly parkId: FieldRef<"Coordinate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Coordinate findUnique
   */
  export type CoordinateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate findUniqueOrThrow
   */
  export type CoordinateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate findFirst
   */
  export type CoordinateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinates.
     */
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate findFirstOrThrow
   */
  export type CoordinateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinates.
     */
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate findMany
   */
  export type CoordinateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinates to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate create
   */
  export type CoordinateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The data needed to create a Coordinate.
     */
    data: XOR<CoordinateCreateInput, CoordinateUncheckedCreateInput>
  }

  /**
   * Coordinate createMany
   */
  export type CoordinateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coordinates.
     */
    data: CoordinateCreateManyInput | CoordinateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coordinate createManyAndReturn
   */
  export type CoordinateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * The data used to create many Coordinates.
     */
    data: CoordinateCreateManyInput | CoordinateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coordinate update
   */
  export type CoordinateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The data needed to update a Coordinate.
     */
    data: XOR<CoordinateUpdateInput, CoordinateUncheckedUpdateInput>
    /**
     * Choose, which Coordinate to update.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate updateMany
   */
  export type CoordinateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coordinates.
     */
    data: XOR<CoordinateUpdateManyMutationInput, CoordinateUncheckedUpdateManyInput>
    /**
     * Filter which Coordinates to update
     */
    where?: CoordinateWhereInput
    /**
     * Limit how many Coordinates to update.
     */
    limit?: number
  }

  /**
   * Coordinate updateManyAndReturn
   */
  export type CoordinateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * The data used to update Coordinates.
     */
    data: XOR<CoordinateUpdateManyMutationInput, CoordinateUncheckedUpdateManyInput>
    /**
     * Filter which Coordinates to update
     */
    where?: CoordinateWhereInput
    /**
     * Limit how many Coordinates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coordinate upsert
   */
  export type CoordinateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The filter to search for the Coordinate to update in case it exists.
     */
    where: CoordinateWhereUniqueInput
    /**
     * In case the Coordinate found by the `where` argument doesn't exist, create a new Coordinate with this data.
     */
    create: XOR<CoordinateCreateInput, CoordinateUncheckedCreateInput>
    /**
     * In case the Coordinate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoordinateUpdateInput, CoordinateUncheckedUpdateInput>
  }

  /**
   * Coordinate delete
   */
  export type CoordinateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter which Coordinate to delete.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate deleteMany
   */
  export type CoordinateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinates to delete
     */
    where?: CoordinateWhereInput
    /**
     * Limit how many Coordinates to delete.
     */
    limit?: number
  }

  /**
   * Coordinate without action
   */
  export type CoordinateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
  }


  /**
   * Model Hours
   */

  export type AggregateHours = {
    _count: HoursCountAggregateOutputType | null
    _min: HoursMinAggregateOutputType | null
    _max: HoursMaxAggregateOutputType | null
  }

  export type HoursMinAggregateOutputType = {
    id: string | null
    open: string | null
    close: string | null
    text_description: string | null
    parkId: string | null
  }

  export type HoursMaxAggregateOutputType = {
    id: string | null
    open: string | null
    close: string | null
    text_description: string | null
    parkId: string | null
  }

  export type HoursCountAggregateOutputType = {
    id: number
    open: number
    close: number
    text_description: number
    parkId: number
    _all: number
  }


  export type HoursMinAggregateInputType = {
    id?: true
    open?: true
    close?: true
    text_description?: true
    parkId?: true
  }

  export type HoursMaxAggregateInputType = {
    id?: true
    open?: true
    close?: true
    text_description?: true
    parkId?: true
  }

  export type HoursCountAggregateInputType = {
    id?: true
    open?: true
    close?: true
    text_description?: true
    parkId?: true
    _all?: true
  }

  export type HoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hours to aggregate.
     */
    where?: HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hours to fetch.
     */
    orderBy?: HoursOrderByWithRelationInput | HoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hours
    **/
    _count?: true | HoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoursMaxAggregateInputType
  }

  export type GetHoursAggregateType<T extends HoursAggregateArgs> = {
        [P in keyof T & keyof AggregateHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHours[P]>
      : GetScalarType<T[P], AggregateHours[P]>
  }




  export type HoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoursWhereInput
    orderBy?: HoursOrderByWithAggregationInput | HoursOrderByWithAggregationInput[]
    by: HoursScalarFieldEnum[] | HoursScalarFieldEnum
    having?: HoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoursCountAggregateInputType | true
    _min?: HoursMinAggregateInputType
    _max?: HoursMaxAggregateInputType
  }

  export type HoursGroupByOutputType = {
    id: string
    open: string | null
    close: string | null
    text_description: string | null
    parkId: string
    _count: HoursCountAggregateOutputType | null
    _min: HoursMinAggregateOutputType | null
    _max: HoursMaxAggregateOutputType | null
  }

  type GetHoursGroupByPayload<T extends HoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoursGroupByOutputType[P]>
            : GetScalarType<T[P], HoursGroupByOutputType[P]>
        }
      >
    >


  export type HoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    open?: boolean
    close?: boolean
    text_description?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hours"]>

  export type HoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    open?: boolean
    close?: boolean
    text_description?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hours"]>

  export type HoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    open?: boolean
    close?: boolean
    text_description?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hours"]>

  export type HoursSelectScalar = {
    id?: boolean
    open?: boolean
    close?: boolean
    text_description?: boolean
    parkId?: boolean
  }

  export type HoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "open" | "close" | "text_description" | "parkId", ExtArgs["result"]["hours"]>
  export type HoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type HoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type HoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }

  export type $HoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hours"
    objects: {
      park: Prisma.$ParkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      open: string | null
      close: string | null
      text_description: string | null
      parkId: string
    }, ExtArgs["result"]["hours"]>
    composites: {}
  }

  type HoursGetPayload<S extends boolean | null | undefined | HoursDefaultArgs> = $Result.GetResult<Prisma.$HoursPayload, S>

  type HoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoursCountAggregateInputType | true
    }

  export interface HoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hours'], meta: { name: 'Hours' } }
    /**
     * Find zero or one Hours that matches the filter.
     * @param {HoursFindUniqueArgs} args - Arguments to find a Hours
     * @example
     * // Get one Hours
     * const hours = await prisma.hours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoursFindUniqueArgs>(args: SelectSubset<T, HoursFindUniqueArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoursFindUniqueOrThrowArgs} args - Arguments to find a Hours
     * @example
     * // Get one Hours
     * const hours = await prisma.hours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoursFindUniqueOrThrowArgs>(args: SelectSubset<T, HoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursFindFirstArgs} args - Arguments to find a Hours
     * @example
     * // Get one Hours
     * const hours = await prisma.hours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoursFindFirstArgs>(args?: SelectSubset<T, HoursFindFirstArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursFindFirstOrThrowArgs} args - Arguments to find a Hours
     * @example
     * // Get one Hours
     * const hours = await prisma.hours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoursFindFirstOrThrowArgs>(args?: SelectSubset<T, HoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hours
     * const hours = await prisma.hours.findMany()
     * 
     * // Get first 10 Hours
     * const hours = await prisma.hours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hoursWithIdOnly = await prisma.hours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoursFindManyArgs>(args?: SelectSubset<T, HoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hours.
     * @param {HoursCreateArgs} args - Arguments to create a Hours.
     * @example
     * // Create one Hours
     * const Hours = await prisma.hours.create({
     *   data: {
     *     // ... data to create a Hours
     *   }
     * })
     * 
     */
    create<T extends HoursCreateArgs>(args: SelectSubset<T, HoursCreateArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hours.
     * @param {HoursCreateManyArgs} args - Arguments to create many Hours.
     * @example
     * // Create many Hours
     * const hours = await prisma.hours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoursCreateManyArgs>(args?: SelectSubset<T, HoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hours and returns the data saved in the database.
     * @param {HoursCreateManyAndReturnArgs} args - Arguments to create many Hours.
     * @example
     * // Create many Hours
     * const hours = await prisma.hours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hours and only return the `id`
     * const hoursWithIdOnly = await prisma.hours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoursCreateManyAndReturnArgs>(args?: SelectSubset<T, HoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hours.
     * @param {HoursDeleteArgs} args - Arguments to delete one Hours.
     * @example
     * // Delete one Hours
     * const Hours = await prisma.hours.delete({
     *   where: {
     *     // ... filter to delete one Hours
     *   }
     * })
     * 
     */
    delete<T extends HoursDeleteArgs>(args: SelectSubset<T, HoursDeleteArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hours.
     * @param {HoursUpdateArgs} args - Arguments to update one Hours.
     * @example
     * // Update one Hours
     * const hours = await prisma.hours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoursUpdateArgs>(args: SelectSubset<T, HoursUpdateArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hours.
     * @param {HoursDeleteManyArgs} args - Arguments to filter Hours to delete.
     * @example
     * // Delete a few Hours
     * const { count } = await prisma.hours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoursDeleteManyArgs>(args?: SelectSubset<T, HoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hours
     * const hours = await prisma.hours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoursUpdateManyArgs>(args: SelectSubset<T, HoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hours and returns the data updated in the database.
     * @param {HoursUpdateManyAndReturnArgs} args - Arguments to update many Hours.
     * @example
     * // Update many Hours
     * const hours = await prisma.hours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hours and only return the `id`
     * const hoursWithIdOnly = await prisma.hours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HoursUpdateManyAndReturnArgs>(args: SelectSubset<T, HoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hours.
     * @param {HoursUpsertArgs} args - Arguments to update or create a Hours.
     * @example
     * // Update or create a Hours
     * const hours = await prisma.hours.upsert({
     *   create: {
     *     // ... data to create a Hours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hours we want to update
     *   }
     * })
     */
    upsert<T extends HoursUpsertArgs>(args: SelectSubset<T, HoursUpsertArgs<ExtArgs>>): Prisma__HoursClient<$Result.GetResult<Prisma.$HoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursCountArgs} args - Arguments to filter Hours to count.
     * @example
     * // Count the number of Hours
     * const count = await prisma.hours.count({
     *   where: {
     *     // ... the filter for the Hours we want to count
     *   }
     * })
    **/
    count<T extends HoursCountArgs>(
      args?: Subset<T, HoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HoursAggregateArgs>(args: Subset<T, HoursAggregateArgs>): Prisma.PrismaPromise<GetHoursAggregateType<T>>

    /**
     * Group by Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoursGroupByArgs['orderBy'] }
        : { orderBy?: HoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hours model
   */
  readonly fields: HoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    park<T extends ParkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkDefaultArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hours model
   */
  interface HoursFieldRefs {
    readonly id: FieldRef<"Hours", 'String'>
    readonly open: FieldRef<"Hours", 'String'>
    readonly close: FieldRef<"Hours", 'String'>
    readonly text_description: FieldRef<"Hours", 'String'>
    readonly parkId: FieldRef<"Hours", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hours findUnique
   */
  export type HoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * Filter, which Hours to fetch.
     */
    where: HoursWhereUniqueInput
  }

  /**
   * Hours findUniqueOrThrow
   */
  export type HoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * Filter, which Hours to fetch.
     */
    where: HoursWhereUniqueInput
  }

  /**
   * Hours findFirst
   */
  export type HoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * Filter, which Hours to fetch.
     */
    where?: HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hours to fetch.
     */
    orderBy?: HoursOrderByWithRelationInput | HoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hours.
     */
    cursor?: HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hours.
     */
    distinct?: HoursScalarFieldEnum | HoursScalarFieldEnum[]
  }

  /**
   * Hours findFirstOrThrow
   */
  export type HoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * Filter, which Hours to fetch.
     */
    where?: HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hours to fetch.
     */
    orderBy?: HoursOrderByWithRelationInput | HoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hours.
     */
    cursor?: HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hours.
     */
    distinct?: HoursScalarFieldEnum | HoursScalarFieldEnum[]
  }

  /**
   * Hours findMany
   */
  export type HoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * Filter, which Hours to fetch.
     */
    where?: HoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hours to fetch.
     */
    orderBy?: HoursOrderByWithRelationInput | HoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hours.
     */
    cursor?: HoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hours.
     */
    skip?: number
    distinct?: HoursScalarFieldEnum | HoursScalarFieldEnum[]
  }

  /**
   * Hours create
   */
  export type HoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * The data needed to create a Hours.
     */
    data: XOR<HoursCreateInput, HoursUncheckedCreateInput>
  }

  /**
   * Hours createMany
   */
  export type HoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hours.
     */
    data: HoursCreateManyInput | HoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hours createManyAndReturn
   */
  export type HoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * The data used to create many Hours.
     */
    data: HoursCreateManyInput | HoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hours update
   */
  export type HoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * The data needed to update a Hours.
     */
    data: XOR<HoursUpdateInput, HoursUncheckedUpdateInput>
    /**
     * Choose, which Hours to update.
     */
    where: HoursWhereUniqueInput
  }

  /**
   * Hours updateMany
   */
  export type HoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hours.
     */
    data: XOR<HoursUpdateManyMutationInput, HoursUncheckedUpdateManyInput>
    /**
     * Filter which Hours to update
     */
    where?: HoursWhereInput
    /**
     * Limit how many Hours to update.
     */
    limit?: number
  }

  /**
   * Hours updateManyAndReturn
   */
  export type HoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * The data used to update Hours.
     */
    data: XOR<HoursUpdateManyMutationInput, HoursUncheckedUpdateManyInput>
    /**
     * Filter which Hours to update
     */
    where?: HoursWhereInput
    /**
     * Limit how many Hours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hours upsert
   */
  export type HoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * The filter to search for the Hours to update in case it exists.
     */
    where: HoursWhereUniqueInput
    /**
     * In case the Hours found by the `where` argument doesn't exist, create a new Hours with this data.
     */
    create: XOR<HoursCreateInput, HoursUncheckedCreateInput>
    /**
     * In case the Hours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoursUpdateInput, HoursUncheckedUpdateInput>
  }

  /**
   * Hours delete
   */
  export type HoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
    /**
     * Filter which Hours to delete.
     */
    where: HoursWhereUniqueInput
  }

  /**
   * Hours deleteMany
   */
  export type HoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hours to delete
     */
    where?: HoursWhereInput
    /**
     * Limit how many Hours to delete.
     */
    limit?: number
  }

  /**
   * Hours without action
   */
  export type HoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hours
     */
    select?: HoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hours
     */
    omit?: HoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    website: string | null
    parkId: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    website: string | null
    parkId: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    phone: number
    email: number
    website: number
    parkId: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    website?: true
    parkId?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    website?: true
    parkId?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    website?: true
    parkId?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    phone: string | null
    email: string | null
    website: string | null
    parkId: string
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    parkId?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "email" | "website" | "parkId", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      park: Prisma.$ParkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string | null
      email: string | null
      website: string | null
      parkId: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    park<T extends ParkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkDefaultArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly website: FieldRef<"Contact", 'String'>
    readonly parkId: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model EntranceFee
   */

  export type AggregateEntranceFee = {
    _count: EntranceFeeCountAggregateOutputType | null
    _avg: EntranceFeeAvgAggregateOutputType | null
    _sum: EntranceFeeSumAggregateOutputType | null
    _min: EntranceFeeMinAggregateOutputType | null
    _max: EntranceFeeMaxAggregateOutputType | null
  }

  export type EntranceFeeAvgAggregateOutputType = {
    daily: number | null
    annual: number | null
  }

  export type EntranceFeeSumAggregateOutputType = {
    daily: number | null
    annual: number | null
  }

  export type EntranceFeeMinAggregateOutputType = {
    id: string | null
    daily: number | null
    annual: number | null
    text_description: string | null
    parkId: string | null
  }

  export type EntranceFeeMaxAggregateOutputType = {
    id: string | null
    daily: number | null
    annual: number | null
    text_description: string | null
    parkId: string | null
  }

  export type EntranceFeeCountAggregateOutputType = {
    id: number
    daily: number
    annual: number
    text_description: number
    parkId: number
    _all: number
  }


  export type EntranceFeeAvgAggregateInputType = {
    daily?: true
    annual?: true
  }

  export type EntranceFeeSumAggregateInputType = {
    daily?: true
    annual?: true
  }

  export type EntranceFeeMinAggregateInputType = {
    id?: true
    daily?: true
    annual?: true
    text_description?: true
    parkId?: true
  }

  export type EntranceFeeMaxAggregateInputType = {
    id?: true
    daily?: true
    annual?: true
    text_description?: true
    parkId?: true
  }

  export type EntranceFeeCountAggregateInputType = {
    id?: true
    daily?: true
    annual?: true
    text_description?: true
    parkId?: true
    _all?: true
  }

  export type EntranceFeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntranceFee to aggregate.
     */
    where?: EntranceFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntranceFees to fetch.
     */
    orderBy?: EntranceFeeOrderByWithRelationInput | EntranceFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntranceFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntranceFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntranceFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntranceFees
    **/
    _count?: true | EntranceFeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntranceFeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntranceFeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntranceFeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntranceFeeMaxAggregateInputType
  }

  export type GetEntranceFeeAggregateType<T extends EntranceFeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEntranceFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntranceFee[P]>
      : GetScalarType<T[P], AggregateEntranceFee[P]>
  }




  export type EntranceFeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntranceFeeWhereInput
    orderBy?: EntranceFeeOrderByWithAggregationInput | EntranceFeeOrderByWithAggregationInput[]
    by: EntranceFeeScalarFieldEnum[] | EntranceFeeScalarFieldEnum
    having?: EntranceFeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntranceFeeCountAggregateInputType | true
    _avg?: EntranceFeeAvgAggregateInputType
    _sum?: EntranceFeeSumAggregateInputType
    _min?: EntranceFeeMinAggregateInputType
    _max?: EntranceFeeMaxAggregateInputType
  }

  export type EntranceFeeGroupByOutputType = {
    id: string
    daily: number | null
    annual: number | null
    text_description: string | null
    parkId: string
    _count: EntranceFeeCountAggregateOutputType | null
    _avg: EntranceFeeAvgAggregateOutputType | null
    _sum: EntranceFeeSumAggregateOutputType | null
    _min: EntranceFeeMinAggregateOutputType | null
    _max: EntranceFeeMaxAggregateOutputType | null
  }

  type GetEntranceFeeGroupByPayload<T extends EntranceFeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntranceFeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntranceFeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntranceFeeGroupByOutputType[P]>
            : GetScalarType<T[P], EntranceFeeGroupByOutputType[P]>
        }
      >
    >


  export type EntranceFeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    daily?: boolean
    annual?: boolean
    text_description?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entranceFee"]>

  export type EntranceFeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    daily?: boolean
    annual?: boolean
    text_description?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entranceFee"]>

  export type EntranceFeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    daily?: boolean
    annual?: boolean
    text_description?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entranceFee"]>

  export type EntranceFeeSelectScalar = {
    id?: boolean
    daily?: boolean
    annual?: boolean
    text_description?: boolean
    parkId?: boolean
  }

  export type EntranceFeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "daily" | "annual" | "text_description" | "parkId", ExtArgs["result"]["entranceFee"]>
  export type EntranceFeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type EntranceFeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type EntranceFeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }

  export type $EntranceFeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntranceFee"
    objects: {
      park: Prisma.$ParkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      daily: number | null
      annual: number | null
      text_description: string | null
      parkId: string
    }, ExtArgs["result"]["entranceFee"]>
    composites: {}
  }

  type EntranceFeeGetPayload<S extends boolean | null | undefined | EntranceFeeDefaultArgs> = $Result.GetResult<Prisma.$EntranceFeePayload, S>

  type EntranceFeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntranceFeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntranceFeeCountAggregateInputType | true
    }

  export interface EntranceFeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntranceFee'], meta: { name: 'EntranceFee' } }
    /**
     * Find zero or one EntranceFee that matches the filter.
     * @param {EntranceFeeFindUniqueArgs} args - Arguments to find a EntranceFee
     * @example
     * // Get one EntranceFee
     * const entranceFee = await prisma.entranceFee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntranceFeeFindUniqueArgs>(args: SelectSubset<T, EntranceFeeFindUniqueArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EntranceFee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntranceFeeFindUniqueOrThrowArgs} args - Arguments to find a EntranceFee
     * @example
     * // Get one EntranceFee
     * const entranceFee = await prisma.entranceFee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntranceFeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EntranceFeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EntranceFee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceFeeFindFirstArgs} args - Arguments to find a EntranceFee
     * @example
     * // Get one EntranceFee
     * const entranceFee = await prisma.entranceFee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntranceFeeFindFirstArgs>(args?: SelectSubset<T, EntranceFeeFindFirstArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EntranceFee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceFeeFindFirstOrThrowArgs} args - Arguments to find a EntranceFee
     * @example
     * // Get one EntranceFee
     * const entranceFee = await prisma.entranceFee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntranceFeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EntranceFeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EntranceFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceFeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntranceFees
     * const entranceFees = await prisma.entranceFee.findMany()
     * 
     * // Get first 10 EntranceFees
     * const entranceFees = await prisma.entranceFee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entranceFeeWithIdOnly = await prisma.entranceFee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntranceFeeFindManyArgs>(args?: SelectSubset<T, EntranceFeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EntranceFee.
     * @param {EntranceFeeCreateArgs} args - Arguments to create a EntranceFee.
     * @example
     * // Create one EntranceFee
     * const EntranceFee = await prisma.entranceFee.create({
     *   data: {
     *     // ... data to create a EntranceFee
     *   }
     * })
     * 
     */
    create<T extends EntranceFeeCreateArgs>(args: SelectSubset<T, EntranceFeeCreateArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EntranceFees.
     * @param {EntranceFeeCreateManyArgs} args - Arguments to create many EntranceFees.
     * @example
     * // Create many EntranceFees
     * const entranceFee = await prisma.entranceFee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntranceFeeCreateManyArgs>(args?: SelectSubset<T, EntranceFeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EntranceFees and returns the data saved in the database.
     * @param {EntranceFeeCreateManyAndReturnArgs} args - Arguments to create many EntranceFees.
     * @example
     * // Create many EntranceFees
     * const entranceFee = await prisma.entranceFee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EntranceFees and only return the `id`
     * const entranceFeeWithIdOnly = await prisma.entranceFee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntranceFeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EntranceFeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EntranceFee.
     * @param {EntranceFeeDeleteArgs} args - Arguments to delete one EntranceFee.
     * @example
     * // Delete one EntranceFee
     * const EntranceFee = await prisma.entranceFee.delete({
     *   where: {
     *     // ... filter to delete one EntranceFee
     *   }
     * })
     * 
     */
    delete<T extends EntranceFeeDeleteArgs>(args: SelectSubset<T, EntranceFeeDeleteArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EntranceFee.
     * @param {EntranceFeeUpdateArgs} args - Arguments to update one EntranceFee.
     * @example
     * // Update one EntranceFee
     * const entranceFee = await prisma.entranceFee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntranceFeeUpdateArgs>(args: SelectSubset<T, EntranceFeeUpdateArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EntranceFees.
     * @param {EntranceFeeDeleteManyArgs} args - Arguments to filter EntranceFees to delete.
     * @example
     * // Delete a few EntranceFees
     * const { count } = await prisma.entranceFee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntranceFeeDeleteManyArgs>(args?: SelectSubset<T, EntranceFeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntranceFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceFeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntranceFees
     * const entranceFee = await prisma.entranceFee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntranceFeeUpdateManyArgs>(args: SelectSubset<T, EntranceFeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntranceFees and returns the data updated in the database.
     * @param {EntranceFeeUpdateManyAndReturnArgs} args - Arguments to update many EntranceFees.
     * @example
     * // Update many EntranceFees
     * const entranceFee = await prisma.entranceFee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EntranceFees and only return the `id`
     * const entranceFeeWithIdOnly = await prisma.entranceFee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntranceFeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EntranceFeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EntranceFee.
     * @param {EntranceFeeUpsertArgs} args - Arguments to update or create a EntranceFee.
     * @example
     * // Update or create a EntranceFee
     * const entranceFee = await prisma.entranceFee.upsert({
     *   create: {
     *     // ... data to create a EntranceFee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntranceFee we want to update
     *   }
     * })
     */
    upsert<T extends EntranceFeeUpsertArgs>(args: SelectSubset<T, EntranceFeeUpsertArgs<ExtArgs>>): Prisma__EntranceFeeClient<$Result.GetResult<Prisma.$EntranceFeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EntranceFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceFeeCountArgs} args - Arguments to filter EntranceFees to count.
     * @example
     * // Count the number of EntranceFees
     * const count = await prisma.entranceFee.count({
     *   where: {
     *     // ... the filter for the EntranceFees we want to count
     *   }
     * })
    **/
    count<T extends EntranceFeeCountArgs>(
      args?: Subset<T, EntranceFeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntranceFeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntranceFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceFeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntranceFeeAggregateArgs>(args: Subset<T, EntranceFeeAggregateArgs>): Prisma.PrismaPromise<GetEntranceFeeAggregateType<T>>

    /**
     * Group by EntranceFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntranceFeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntranceFeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntranceFeeGroupByArgs['orderBy'] }
        : { orderBy?: EntranceFeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntranceFeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntranceFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntranceFee model
   */
  readonly fields: EntranceFeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntranceFee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntranceFeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    park<T extends ParkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkDefaultArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EntranceFee model
   */
  interface EntranceFeeFieldRefs {
    readonly id: FieldRef<"EntranceFee", 'String'>
    readonly daily: FieldRef<"EntranceFee", 'Float'>
    readonly annual: FieldRef<"EntranceFee", 'Float'>
    readonly text_description: FieldRef<"EntranceFee", 'String'>
    readonly parkId: FieldRef<"EntranceFee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EntranceFee findUnique
   */
  export type EntranceFeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * Filter, which EntranceFee to fetch.
     */
    where: EntranceFeeWhereUniqueInput
  }

  /**
   * EntranceFee findUniqueOrThrow
   */
  export type EntranceFeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * Filter, which EntranceFee to fetch.
     */
    where: EntranceFeeWhereUniqueInput
  }

  /**
   * EntranceFee findFirst
   */
  export type EntranceFeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * Filter, which EntranceFee to fetch.
     */
    where?: EntranceFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntranceFees to fetch.
     */
    orderBy?: EntranceFeeOrderByWithRelationInput | EntranceFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntranceFees.
     */
    cursor?: EntranceFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntranceFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntranceFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntranceFees.
     */
    distinct?: EntranceFeeScalarFieldEnum | EntranceFeeScalarFieldEnum[]
  }

  /**
   * EntranceFee findFirstOrThrow
   */
  export type EntranceFeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * Filter, which EntranceFee to fetch.
     */
    where?: EntranceFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntranceFees to fetch.
     */
    orderBy?: EntranceFeeOrderByWithRelationInput | EntranceFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntranceFees.
     */
    cursor?: EntranceFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntranceFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntranceFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntranceFees.
     */
    distinct?: EntranceFeeScalarFieldEnum | EntranceFeeScalarFieldEnum[]
  }

  /**
   * EntranceFee findMany
   */
  export type EntranceFeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * Filter, which EntranceFees to fetch.
     */
    where?: EntranceFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntranceFees to fetch.
     */
    orderBy?: EntranceFeeOrderByWithRelationInput | EntranceFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntranceFees.
     */
    cursor?: EntranceFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntranceFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntranceFees.
     */
    skip?: number
    distinct?: EntranceFeeScalarFieldEnum | EntranceFeeScalarFieldEnum[]
  }

  /**
   * EntranceFee create
   */
  export type EntranceFeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * The data needed to create a EntranceFee.
     */
    data: XOR<EntranceFeeCreateInput, EntranceFeeUncheckedCreateInput>
  }

  /**
   * EntranceFee createMany
   */
  export type EntranceFeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntranceFees.
     */
    data: EntranceFeeCreateManyInput | EntranceFeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EntranceFee createManyAndReturn
   */
  export type EntranceFeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * The data used to create many EntranceFees.
     */
    data: EntranceFeeCreateManyInput | EntranceFeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EntranceFee update
   */
  export type EntranceFeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * The data needed to update a EntranceFee.
     */
    data: XOR<EntranceFeeUpdateInput, EntranceFeeUncheckedUpdateInput>
    /**
     * Choose, which EntranceFee to update.
     */
    where: EntranceFeeWhereUniqueInput
  }

  /**
   * EntranceFee updateMany
   */
  export type EntranceFeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntranceFees.
     */
    data: XOR<EntranceFeeUpdateManyMutationInput, EntranceFeeUncheckedUpdateManyInput>
    /**
     * Filter which EntranceFees to update
     */
    where?: EntranceFeeWhereInput
    /**
     * Limit how many EntranceFees to update.
     */
    limit?: number
  }

  /**
   * EntranceFee updateManyAndReturn
   */
  export type EntranceFeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * The data used to update EntranceFees.
     */
    data: XOR<EntranceFeeUpdateManyMutationInput, EntranceFeeUncheckedUpdateManyInput>
    /**
     * Filter which EntranceFees to update
     */
    where?: EntranceFeeWhereInput
    /**
     * Limit how many EntranceFees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EntranceFee upsert
   */
  export type EntranceFeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * The filter to search for the EntranceFee to update in case it exists.
     */
    where: EntranceFeeWhereUniqueInput
    /**
     * In case the EntranceFee found by the `where` argument doesn't exist, create a new EntranceFee with this data.
     */
    create: XOR<EntranceFeeCreateInput, EntranceFeeUncheckedCreateInput>
    /**
     * In case the EntranceFee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntranceFeeUpdateInput, EntranceFeeUncheckedUpdateInput>
  }

  /**
   * EntranceFee delete
   */
  export type EntranceFeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
    /**
     * Filter which EntranceFee to delete.
     */
    where: EntranceFeeWhereUniqueInput
  }

  /**
   * EntranceFee deleteMany
   */
  export type EntranceFeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntranceFees to delete
     */
    where?: EntranceFeeWhereInput
    /**
     * Limit how many EntranceFees to delete.
     */
    limit?: number
  }

  /**
   * EntranceFee without action
   */
  export type EntranceFeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntranceFee
     */
    select?: EntranceFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntranceFee
     */
    omit?: EntranceFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntranceFeeInclude<ExtArgs> | null
  }


  /**
   * Model Parking
   */

  export type AggregateParking = {
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  export type ParkingAvgAggregateOutputType = {
    totalSpaces: number | null
  }

  export type ParkingSumAggregateOutputType = {
    totalSpaces: number | null
  }

  export type ParkingMinAggregateOutputType = {
    id: string | null
    totalSpaces: number | null
    isFree: boolean | null
    parkId: string | null
  }

  export type ParkingMaxAggregateOutputType = {
    id: string | null
    totalSpaces: number | null
    isFree: boolean | null
    parkId: string | null
  }

  export type ParkingCountAggregateOutputType = {
    id: number
    totalSpaces: number
    isFree: number
    parkId: number
    _all: number
  }


  export type ParkingAvgAggregateInputType = {
    totalSpaces?: true
  }

  export type ParkingSumAggregateInputType = {
    totalSpaces?: true
  }

  export type ParkingMinAggregateInputType = {
    id?: true
    totalSpaces?: true
    isFree?: true
    parkId?: true
  }

  export type ParkingMaxAggregateInputType = {
    id?: true
    totalSpaces?: true
    isFree?: true
    parkId?: true
  }

  export type ParkingCountAggregateInputType = {
    id?: true
    totalSpaces?: true
    isFree?: true
    parkId?: true
    _all?: true
  }

  export type ParkingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parking to aggregate.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parkings
    **/
    _count?: true | ParkingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingMaxAggregateInputType
  }

  export type GetParkingAggregateType<T extends ParkingAggregateArgs> = {
        [P in keyof T & keyof AggregateParking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParking[P]>
      : GetScalarType<T[P], AggregateParking[P]>
  }




  export type ParkingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingWhereInput
    orderBy?: ParkingOrderByWithAggregationInput | ParkingOrderByWithAggregationInput[]
    by: ParkingScalarFieldEnum[] | ParkingScalarFieldEnum
    having?: ParkingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingCountAggregateInputType | true
    _avg?: ParkingAvgAggregateInputType
    _sum?: ParkingSumAggregateInputType
    _min?: ParkingMinAggregateInputType
    _max?: ParkingMaxAggregateInputType
  }

  export type ParkingGroupByOutputType = {
    id: string
    totalSpaces: number | null
    isFree: boolean | null
    parkId: string
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  type GetParkingGroupByPayload<T extends ParkingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalSpaces?: boolean
    isFree?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalSpaces?: boolean
    isFree?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalSpaces?: boolean
    isFree?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectScalar = {
    id?: boolean
    totalSpaces?: boolean
    isFree?: boolean
    parkId?: boolean
  }

  export type ParkingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalSpaces" | "isFree" | "parkId", ExtArgs["result"]["parking"]>
  export type ParkingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type ParkingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type ParkingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }

  export type $ParkingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parking"
    objects: {
      park: Prisma.$ParkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalSpaces: number | null
      isFree: boolean | null
      parkId: string
    }, ExtArgs["result"]["parking"]>
    composites: {}
  }

  type ParkingGetPayload<S extends boolean | null | undefined | ParkingDefaultArgs> = $Result.GetResult<Prisma.$ParkingPayload, S>

  type ParkingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingCountAggregateInputType | true
    }

  export interface ParkingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parking'], meta: { name: 'Parking' } }
    /**
     * Find zero or one Parking that matches the filter.
     * @param {ParkingFindUniqueArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingFindUniqueArgs>(args: SelectSubset<T, ParkingFindUniqueArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingFindUniqueOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingFindFirstArgs>(args?: SelectSubset<T, ParkingFindFirstArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parkings
     * const parkings = await prisma.parking.findMany()
     * 
     * // Get first 10 Parkings
     * const parkings = await prisma.parking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingWithIdOnly = await prisma.parking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingFindManyArgs>(args?: SelectSubset<T, ParkingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parking.
     * @param {ParkingCreateArgs} args - Arguments to create a Parking.
     * @example
     * // Create one Parking
     * const Parking = await prisma.parking.create({
     *   data: {
     *     // ... data to create a Parking
     *   }
     * })
     * 
     */
    create<T extends ParkingCreateArgs>(args: SelectSubset<T, ParkingCreateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parkings.
     * @param {ParkingCreateManyArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingCreateManyArgs>(args?: SelectSubset<T, ParkingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parkings and returns the data saved in the database.
     * @param {ParkingCreateManyAndReturnArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parkings and only return the `id`
     * const parkingWithIdOnly = await prisma.parking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parking.
     * @param {ParkingDeleteArgs} args - Arguments to delete one Parking.
     * @example
     * // Delete one Parking
     * const Parking = await prisma.parking.delete({
     *   where: {
     *     // ... filter to delete one Parking
     *   }
     * })
     * 
     */
    delete<T extends ParkingDeleteArgs>(args: SelectSubset<T, ParkingDeleteArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parking.
     * @param {ParkingUpdateArgs} args - Arguments to update one Parking.
     * @example
     * // Update one Parking
     * const parking = await prisma.parking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingUpdateArgs>(args: SelectSubset<T, ParkingUpdateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parkings.
     * @param {ParkingDeleteManyArgs} args - Arguments to filter Parkings to delete.
     * @example
     * // Delete a few Parkings
     * const { count } = await prisma.parking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingDeleteManyArgs>(args?: SelectSubset<T, ParkingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingUpdateManyArgs>(args: SelectSubset<T, ParkingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings and returns the data updated in the database.
     * @param {ParkingUpdateManyAndReturnArgs} args - Arguments to update many Parkings.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parkings and only return the `id`
     * const parkingWithIdOnly = await prisma.parking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parking.
     * @param {ParkingUpsertArgs} args - Arguments to update or create a Parking.
     * @example
     * // Update or create a Parking
     * const parking = await prisma.parking.upsert({
     *   create: {
     *     // ... data to create a Parking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parking we want to update
     *   }
     * })
     */
    upsert<T extends ParkingUpsertArgs>(args: SelectSubset<T, ParkingUpsertArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingCountArgs} args - Arguments to filter Parkings to count.
     * @example
     * // Count the number of Parkings
     * const count = await prisma.parking.count({
     *   where: {
     *     // ... the filter for the Parkings we want to count
     *   }
     * })
    **/
    count<T extends ParkingCountArgs>(
      args?: Subset<T, ParkingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingAggregateArgs>(args: Subset<T, ParkingAggregateArgs>): Prisma.PrismaPromise<GetParkingAggregateType<T>>

    /**
     * Group by Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingGroupByArgs['orderBy'] }
        : { orderBy?: ParkingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parking model
   */
  readonly fields: ParkingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    park<T extends ParkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkDefaultArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parking model
   */
  interface ParkingFieldRefs {
    readonly id: FieldRef<"Parking", 'String'>
    readonly totalSpaces: FieldRef<"Parking", 'Int'>
    readonly isFree: FieldRef<"Parking", 'Boolean'>
    readonly parkId: FieldRef<"Parking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parking findUnique
   */
  export type ParkingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findUniqueOrThrow
   */
  export type ParkingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findFirst
   */
  export type ParkingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findFirstOrThrow
   */
  export type ParkingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findMany
   */
  export type ParkingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parkings to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking create
   */
  export type ParkingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to create a Parking.
     */
    data: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
  }

  /**
   * Parking createMany
   */
  export type ParkingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parking createManyAndReturn
   */
  export type ParkingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parking update
   */
  export type ParkingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to update a Parking.
     */
    data: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
    /**
     * Choose, which Parking to update.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking updateMany
   */
  export type ParkingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
  }

  /**
   * Parking updateManyAndReturn
   */
  export type ParkingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parking upsert
   */
  export type ParkingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The filter to search for the Parking to update in case it exists.
     */
    where: ParkingWhereUniqueInput
    /**
     * In case the Parking found by the `where` argument doesn't exist, create a new Parking with this data.
     */
    create: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
    /**
     * In case the Parking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
  }

  /**
   * Parking delete
   */
  export type ParkingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter which Parking to delete.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking deleteMany
   */
  export type ParkingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parkings to delete
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to delete.
     */
    limit?: number
  }

  /**
   * Parking without action
   */
  export type ParkingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
  }


  /**
   * Model SeasonalInfo
   */

  export type AggregateSeasonalInfo = {
    _count: SeasonalInfoCountAggregateOutputType | null
    _min: SeasonalInfoMinAggregateOutputType | null
    _max: SeasonalInfoMaxAggregateOutputType | null
  }

  export type SeasonalInfoMinAggregateOutputType = {
    id: string | null
    bestTimeToVisit: string | null
    parkId: string | null
  }

  export type SeasonalInfoMaxAggregateOutputType = {
    id: string | null
    bestTimeToVisit: string | null
    parkId: string | null
  }

  export type SeasonalInfoCountAggregateOutputType = {
    id: number
    bestTimeToVisit: number
    seasonalClosures: number
    parkId: number
    _all: number
  }


  export type SeasonalInfoMinAggregateInputType = {
    id?: true
    bestTimeToVisit?: true
    parkId?: true
  }

  export type SeasonalInfoMaxAggregateInputType = {
    id?: true
    bestTimeToVisit?: true
    parkId?: true
  }

  export type SeasonalInfoCountAggregateInputType = {
    id?: true
    bestTimeToVisit?: true
    seasonalClosures?: true
    parkId?: true
    _all?: true
  }

  export type SeasonalInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonalInfo to aggregate.
     */
    where?: SeasonalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonalInfos to fetch.
     */
    orderBy?: SeasonalInfoOrderByWithRelationInput | SeasonalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeasonalInfos
    **/
    _count?: true | SeasonalInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonalInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonalInfoMaxAggregateInputType
  }

  export type GetSeasonalInfoAggregateType<T extends SeasonalInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateSeasonalInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeasonalInfo[P]>
      : GetScalarType<T[P], AggregateSeasonalInfo[P]>
  }




  export type SeasonalInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonalInfoWhereInput
    orderBy?: SeasonalInfoOrderByWithAggregationInput | SeasonalInfoOrderByWithAggregationInput[]
    by: SeasonalInfoScalarFieldEnum[] | SeasonalInfoScalarFieldEnum
    having?: SeasonalInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonalInfoCountAggregateInputType | true
    _min?: SeasonalInfoMinAggregateInputType
    _max?: SeasonalInfoMaxAggregateInputType
  }

  export type SeasonalInfoGroupByOutputType = {
    id: string
    bestTimeToVisit: string | null
    seasonalClosures: string[]
    parkId: string
    _count: SeasonalInfoCountAggregateOutputType | null
    _min: SeasonalInfoMinAggregateOutputType | null
    _max: SeasonalInfoMaxAggregateOutputType | null
  }

  type GetSeasonalInfoGroupByPayload<T extends SeasonalInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonalInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonalInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonalInfoGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonalInfoGroupByOutputType[P]>
        }
      >
    >


  export type SeasonalInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bestTimeToVisit?: boolean
    seasonalClosures?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonalInfo"]>

  export type SeasonalInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bestTimeToVisit?: boolean
    seasonalClosures?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonalInfo"]>

  export type SeasonalInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bestTimeToVisit?: boolean
    seasonalClosures?: boolean
    parkId?: boolean
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonalInfo"]>

  export type SeasonalInfoSelectScalar = {
    id?: boolean
    bestTimeToVisit?: boolean
    seasonalClosures?: boolean
    parkId?: boolean
  }

  export type SeasonalInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bestTimeToVisit" | "seasonalClosures" | "parkId", ExtArgs["result"]["seasonalInfo"]>
  export type SeasonalInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type SeasonalInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }
  export type SeasonalInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    park?: boolean | ParkDefaultArgs<ExtArgs>
  }

  export type $SeasonalInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeasonalInfo"
    objects: {
      park: Prisma.$ParkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bestTimeToVisit: string | null
      seasonalClosures: string[]
      parkId: string
    }, ExtArgs["result"]["seasonalInfo"]>
    composites: {}
  }

  type SeasonalInfoGetPayload<S extends boolean | null | undefined | SeasonalInfoDefaultArgs> = $Result.GetResult<Prisma.$SeasonalInfoPayload, S>

  type SeasonalInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonalInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonalInfoCountAggregateInputType | true
    }

  export interface SeasonalInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeasonalInfo'], meta: { name: 'SeasonalInfo' } }
    /**
     * Find zero or one SeasonalInfo that matches the filter.
     * @param {SeasonalInfoFindUniqueArgs} args - Arguments to find a SeasonalInfo
     * @example
     * // Get one SeasonalInfo
     * const seasonalInfo = await prisma.seasonalInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonalInfoFindUniqueArgs>(args: SelectSubset<T, SeasonalInfoFindUniqueArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeasonalInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonalInfoFindUniqueOrThrowArgs} args - Arguments to find a SeasonalInfo
     * @example
     * // Get one SeasonalInfo
     * const seasonalInfo = await prisma.seasonalInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonalInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonalInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeasonalInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonalInfoFindFirstArgs} args - Arguments to find a SeasonalInfo
     * @example
     * // Get one SeasonalInfo
     * const seasonalInfo = await prisma.seasonalInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonalInfoFindFirstArgs>(args?: SelectSubset<T, SeasonalInfoFindFirstArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeasonalInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonalInfoFindFirstOrThrowArgs} args - Arguments to find a SeasonalInfo
     * @example
     * // Get one SeasonalInfo
     * const seasonalInfo = await prisma.seasonalInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonalInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonalInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeasonalInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonalInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeasonalInfos
     * const seasonalInfos = await prisma.seasonalInfo.findMany()
     * 
     * // Get first 10 SeasonalInfos
     * const seasonalInfos = await prisma.seasonalInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonalInfoWithIdOnly = await prisma.seasonalInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonalInfoFindManyArgs>(args?: SelectSubset<T, SeasonalInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeasonalInfo.
     * @param {SeasonalInfoCreateArgs} args - Arguments to create a SeasonalInfo.
     * @example
     * // Create one SeasonalInfo
     * const SeasonalInfo = await prisma.seasonalInfo.create({
     *   data: {
     *     // ... data to create a SeasonalInfo
     *   }
     * })
     * 
     */
    create<T extends SeasonalInfoCreateArgs>(args: SelectSubset<T, SeasonalInfoCreateArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeasonalInfos.
     * @param {SeasonalInfoCreateManyArgs} args - Arguments to create many SeasonalInfos.
     * @example
     * // Create many SeasonalInfos
     * const seasonalInfo = await prisma.seasonalInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonalInfoCreateManyArgs>(args?: SelectSubset<T, SeasonalInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeasonalInfos and returns the data saved in the database.
     * @param {SeasonalInfoCreateManyAndReturnArgs} args - Arguments to create many SeasonalInfos.
     * @example
     * // Create many SeasonalInfos
     * const seasonalInfo = await prisma.seasonalInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeasonalInfos and only return the `id`
     * const seasonalInfoWithIdOnly = await prisma.seasonalInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonalInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonalInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeasonalInfo.
     * @param {SeasonalInfoDeleteArgs} args - Arguments to delete one SeasonalInfo.
     * @example
     * // Delete one SeasonalInfo
     * const SeasonalInfo = await prisma.seasonalInfo.delete({
     *   where: {
     *     // ... filter to delete one SeasonalInfo
     *   }
     * })
     * 
     */
    delete<T extends SeasonalInfoDeleteArgs>(args: SelectSubset<T, SeasonalInfoDeleteArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeasonalInfo.
     * @param {SeasonalInfoUpdateArgs} args - Arguments to update one SeasonalInfo.
     * @example
     * // Update one SeasonalInfo
     * const seasonalInfo = await prisma.seasonalInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonalInfoUpdateArgs>(args: SelectSubset<T, SeasonalInfoUpdateArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeasonalInfos.
     * @param {SeasonalInfoDeleteManyArgs} args - Arguments to filter SeasonalInfos to delete.
     * @example
     * // Delete a few SeasonalInfos
     * const { count } = await prisma.seasonalInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonalInfoDeleteManyArgs>(args?: SelectSubset<T, SeasonalInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonalInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonalInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeasonalInfos
     * const seasonalInfo = await prisma.seasonalInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonalInfoUpdateManyArgs>(args: SelectSubset<T, SeasonalInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonalInfos and returns the data updated in the database.
     * @param {SeasonalInfoUpdateManyAndReturnArgs} args - Arguments to update many SeasonalInfos.
     * @example
     * // Update many SeasonalInfos
     * const seasonalInfo = await prisma.seasonalInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeasonalInfos and only return the `id`
     * const seasonalInfoWithIdOnly = await prisma.seasonalInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeasonalInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonalInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeasonalInfo.
     * @param {SeasonalInfoUpsertArgs} args - Arguments to update or create a SeasonalInfo.
     * @example
     * // Update or create a SeasonalInfo
     * const seasonalInfo = await prisma.seasonalInfo.upsert({
     *   create: {
     *     // ... data to create a SeasonalInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeasonalInfo we want to update
     *   }
     * })
     */
    upsert<T extends SeasonalInfoUpsertArgs>(args: SelectSubset<T, SeasonalInfoUpsertArgs<ExtArgs>>): Prisma__SeasonalInfoClient<$Result.GetResult<Prisma.$SeasonalInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeasonalInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonalInfoCountArgs} args - Arguments to filter SeasonalInfos to count.
     * @example
     * // Count the number of SeasonalInfos
     * const count = await prisma.seasonalInfo.count({
     *   where: {
     *     // ... the filter for the SeasonalInfos we want to count
     *   }
     * })
    **/
    count<T extends SeasonalInfoCountArgs>(
      args?: Subset<T, SeasonalInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonalInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeasonalInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonalInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonalInfoAggregateArgs>(args: Subset<T, SeasonalInfoAggregateArgs>): Prisma.PrismaPromise<GetSeasonalInfoAggregateType<T>>

    /**
     * Group by SeasonalInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonalInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeasonalInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonalInfoGroupByArgs['orderBy'] }
        : { orderBy?: SeasonalInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeasonalInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonalInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeasonalInfo model
   */
  readonly fields: SeasonalInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeasonalInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonalInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    park<T extends ParkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkDefaultArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeasonalInfo model
   */
  interface SeasonalInfoFieldRefs {
    readonly id: FieldRef<"SeasonalInfo", 'String'>
    readonly bestTimeToVisit: FieldRef<"SeasonalInfo", 'String'>
    readonly seasonalClosures: FieldRef<"SeasonalInfo", 'String[]'>
    readonly parkId: FieldRef<"SeasonalInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SeasonalInfo findUnique
   */
  export type SeasonalInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which SeasonalInfo to fetch.
     */
    where: SeasonalInfoWhereUniqueInput
  }

  /**
   * SeasonalInfo findUniqueOrThrow
   */
  export type SeasonalInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which SeasonalInfo to fetch.
     */
    where: SeasonalInfoWhereUniqueInput
  }

  /**
   * SeasonalInfo findFirst
   */
  export type SeasonalInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which SeasonalInfo to fetch.
     */
    where?: SeasonalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonalInfos to fetch.
     */
    orderBy?: SeasonalInfoOrderByWithRelationInput | SeasonalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonalInfos.
     */
    cursor?: SeasonalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonalInfos.
     */
    distinct?: SeasonalInfoScalarFieldEnum | SeasonalInfoScalarFieldEnum[]
  }

  /**
   * SeasonalInfo findFirstOrThrow
   */
  export type SeasonalInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which SeasonalInfo to fetch.
     */
    where?: SeasonalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonalInfos to fetch.
     */
    orderBy?: SeasonalInfoOrderByWithRelationInput | SeasonalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonalInfos.
     */
    cursor?: SeasonalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonalInfos.
     */
    distinct?: SeasonalInfoScalarFieldEnum | SeasonalInfoScalarFieldEnum[]
  }

  /**
   * SeasonalInfo findMany
   */
  export type SeasonalInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which SeasonalInfos to fetch.
     */
    where?: SeasonalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonalInfos to fetch.
     */
    orderBy?: SeasonalInfoOrderByWithRelationInput | SeasonalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeasonalInfos.
     */
    cursor?: SeasonalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonalInfos.
     */
    skip?: number
    distinct?: SeasonalInfoScalarFieldEnum | SeasonalInfoScalarFieldEnum[]
  }

  /**
   * SeasonalInfo create
   */
  export type SeasonalInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a SeasonalInfo.
     */
    data: XOR<SeasonalInfoCreateInput, SeasonalInfoUncheckedCreateInput>
  }

  /**
   * SeasonalInfo createMany
   */
  export type SeasonalInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeasonalInfos.
     */
    data: SeasonalInfoCreateManyInput | SeasonalInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeasonalInfo createManyAndReturn
   */
  export type SeasonalInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * The data used to create many SeasonalInfos.
     */
    data: SeasonalInfoCreateManyInput | SeasonalInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeasonalInfo update
   */
  export type SeasonalInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a SeasonalInfo.
     */
    data: XOR<SeasonalInfoUpdateInput, SeasonalInfoUncheckedUpdateInput>
    /**
     * Choose, which SeasonalInfo to update.
     */
    where: SeasonalInfoWhereUniqueInput
  }

  /**
   * SeasonalInfo updateMany
   */
  export type SeasonalInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeasonalInfos.
     */
    data: XOR<SeasonalInfoUpdateManyMutationInput, SeasonalInfoUncheckedUpdateManyInput>
    /**
     * Filter which SeasonalInfos to update
     */
    where?: SeasonalInfoWhereInput
    /**
     * Limit how many SeasonalInfos to update.
     */
    limit?: number
  }

  /**
   * SeasonalInfo updateManyAndReturn
   */
  export type SeasonalInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * The data used to update SeasonalInfos.
     */
    data: XOR<SeasonalInfoUpdateManyMutationInput, SeasonalInfoUncheckedUpdateManyInput>
    /**
     * Filter which SeasonalInfos to update
     */
    where?: SeasonalInfoWhereInput
    /**
     * Limit how many SeasonalInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeasonalInfo upsert
   */
  export type SeasonalInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the SeasonalInfo to update in case it exists.
     */
    where: SeasonalInfoWhereUniqueInput
    /**
     * In case the SeasonalInfo found by the `where` argument doesn't exist, create a new SeasonalInfo with this data.
     */
    create: XOR<SeasonalInfoCreateInput, SeasonalInfoUncheckedCreateInput>
    /**
     * In case the SeasonalInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonalInfoUpdateInput, SeasonalInfoUncheckedUpdateInput>
  }

  /**
   * SeasonalInfo delete
   */
  export type SeasonalInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
    /**
     * Filter which SeasonalInfo to delete.
     */
    where: SeasonalInfoWhereUniqueInput
  }

  /**
   * SeasonalInfo deleteMany
   */
  export type SeasonalInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonalInfos to delete
     */
    where?: SeasonalInfoWhereInput
    /**
     * Limit how many SeasonalInfos to delete.
     */
    limit?: number
  }

  /**
   * SeasonalInfo without action
   */
  export type SeasonalInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonalInfo
     */
    select?: SeasonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonalInfo
     */
    omit?: SeasonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonalInfoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ParkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    activities: 'activities',
    facilities: 'facilities',
    rules: 'rules',
    isDogFriendly: 'isDogFriendly',
    isAccessible: 'isAccessible',
    image_from_listing: 'image_from_listing',
    downloaded_image_path: 'downloaded_image_path',
    info_url: 'info_url',
    recreation_url: 'recreation_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkScalarFieldEnum = (typeof ParkScalarFieldEnum)[keyof typeof ParkScalarFieldEnum]


  export const CoordinateScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    parkId: 'parkId'
  };

  export type CoordinateScalarFieldEnum = (typeof CoordinateScalarFieldEnum)[keyof typeof CoordinateScalarFieldEnum]


  export const HoursScalarFieldEnum: {
    id: 'id',
    open: 'open',
    close: 'close',
    text_description: 'text_description',
    parkId: 'parkId'
  };

  export type HoursScalarFieldEnum = (typeof HoursScalarFieldEnum)[keyof typeof HoursScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    email: 'email',
    website: 'website',
    parkId: 'parkId'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const EntranceFeeScalarFieldEnum: {
    id: 'id',
    daily: 'daily',
    annual: 'annual',
    text_description: 'text_description',
    parkId: 'parkId'
  };

  export type EntranceFeeScalarFieldEnum = (typeof EntranceFeeScalarFieldEnum)[keyof typeof EntranceFeeScalarFieldEnum]


  export const ParkingScalarFieldEnum: {
    id: 'id',
    totalSpaces: 'totalSpaces',
    isFree: 'isFree',
    parkId: 'parkId'
  };

  export type ParkingScalarFieldEnum = (typeof ParkingScalarFieldEnum)[keyof typeof ParkingScalarFieldEnum]


  export const SeasonalInfoScalarFieldEnum: {
    id: 'id',
    bestTimeToVisit: 'bestTimeToVisit',
    seasonalClosures: 'seasonalClosures',
    parkId: 'parkId'
  };

  export type SeasonalInfoScalarFieldEnum = (typeof SeasonalInfoScalarFieldEnum)[keyof typeof SeasonalInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ParkWhereInput = {
    AND?: ParkWhereInput | ParkWhereInput[]
    OR?: ParkWhereInput[]
    NOT?: ParkWhereInput | ParkWhereInput[]
    id?: StringFilter<"Park"> | string
    name?: StringFilter<"Park"> | string
    description?: StringNullableFilter<"Park"> | string | null
    activities?: IntNullableListFilter<"Park">
    facilities?: StringNullableListFilter<"Park">
    rules?: StringNullableListFilter<"Park">
    isDogFriendly?: BoolNullableFilter<"Park"> | boolean | null
    isAccessible?: BoolNullableFilter<"Park"> | boolean | null
    image_from_listing?: StringNullableFilter<"Park"> | string | null
    downloaded_image_path?: StringNullableFilter<"Park"> | string | null
    info_url?: StringNullableFilter<"Park"> | string | null
    recreation_url?: StringNullableFilter<"Park"> | string | null
    createdAt?: DateTimeFilter<"Park"> | Date | string
    updatedAt?: DateTimeFilter<"Park"> | Date | string
    coordinate?: XOR<CoordinateNullableScalarRelationFilter, CoordinateWhereInput> | null
    hours?: XOR<HoursNullableScalarRelationFilter, HoursWhereInput> | null
    contact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
    entranceFee?: XOR<EntranceFeeNullableScalarRelationFilter, EntranceFeeWhereInput> | null
    parking?: XOR<ParkingNullableScalarRelationFilter, ParkingWhereInput> | null
    seasonalInfo?: XOR<SeasonalInfoNullableScalarRelationFilter, SeasonalInfoWhereInput> | null
  }

  export type ParkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    activities?: SortOrder
    facilities?: SortOrder
    rules?: SortOrder
    isDogFriendly?: SortOrderInput | SortOrder
    isAccessible?: SortOrderInput | SortOrder
    image_from_listing?: SortOrderInput | SortOrder
    downloaded_image_path?: SortOrderInput | SortOrder
    info_url?: SortOrderInput | SortOrder
    recreation_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coordinate?: CoordinateOrderByWithRelationInput
    hours?: HoursOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
    entranceFee?: EntranceFeeOrderByWithRelationInput
    parking?: ParkingOrderByWithRelationInput
    seasonalInfo?: SeasonalInfoOrderByWithRelationInput
  }

  export type ParkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkWhereInput | ParkWhereInput[]
    OR?: ParkWhereInput[]
    NOT?: ParkWhereInput | ParkWhereInput[]
    name?: StringFilter<"Park"> | string
    description?: StringNullableFilter<"Park"> | string | null
    activities?: IntNullableListFilter<"Park">
    facilities?: StringNullableListFilter<"Park">
    rules?: StringNullableListFilter<"Park">
    isDogFriendly?: BoolNullableFilter<"Park"> | boolean | null
    isAccessible?: BoolNullableFilter<"Park"> | boolean | null
    image_from_listing?: StringNullableFilter<"Park"> | string | null
    downloaded_image_path?: StringNullableFilter<"Park"> | string | null
    info_url?: StringNullableFilter<"Park"> | string | null
    recreation_url?: StringNullableFilter<"Park"> | string | null
    createdAt?: DateTimeFilter<"Park"> | Date | string
    updatedAt?: DateTimeFilter<"Park"> | Date | string
    coordinate?: XOR<CoordinateNullableScalarRelationFilter, CoordinateWhereInput> | null
    hours?: XOR<HoursNullableScalarRelationFilter, HoursWhereInput> | null
    contact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
    entranceFee?: XOR<EntranceFeeNullableScalarRelationFilter, EntranceFeeWhereInput> | null
    parking?: XOR<ParkingNullableScalarRelationFilter, ParkingWhereInput> | null
    seasonalInfo?: XOR<SeasonalInfoNullableScalarRelationFilter, SeasonalInfoWhereInput> | null
  }, "id">

  export type ParkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    activities?: SortOrder
    facilities?: SortOrder
    rules?: SortOrder
    isDogFriendly?: SortOrderInput | SortOrder
    isAccessible?: SortOrderInput | SortOrder
    image_from_listing?: SortOrderInput | SortOrder
    downloaded_image_path?: SortOrderInput | SortOrder
    info_url?: SortOrderInput | SortOrder
    recreation_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkCountOrderByAggregateInput
    _avg?: ParkAvgOrderByAggregateInput
    _max?: ParkMaxOrderByAggregateInput
    _min?: ParkMinOrderByAggregateInput
    _sum?: ParkSumOrderByAggregateInput
  }

  export type ParkScalarWhereWithAggregatesInput = {
    AND?: ParkScalarWhereWithAggregatesInput | ParkScalarWhereWithAggregatesInput[]
    OR?: ParkScalarWhereWithAggregatesInput[]
    NOT?: ParkScalarWhereWithAggregatesInput | ParkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Park"> | string
    name?: StringWithAggregatesFilter<"Park"> | string
    description?: StringNullableWithAggregatesFilter<"Park"> | string | null
    activities?: IntNullableListFilter<"Park">
    facilities?: StringNullableListFilter<"Park">
    rules?: StringNullableListFilter<"Park">
    isDogFriendly?: BoolNullableWithAggregatesFilter<"Park"> | boolean | null
    isAccessible?: BoolNullableWithAggregatesFilter<"Park"> | boolean | null
    image_from_listing?: StringNullableWithAggregatesFilter<"Park"> | string | null
    downloaded_image_path?: StringNullableWithAggregatesFilter<"Park"> | string | null
    info_url?: StringNullableWithAggregatesFilter<"Park"> | string | null
    recreation_url?: StringNullableWithAggregatesFilter<"Park"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Park"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Park"> | Date | string
  }

  export type CoordinateWhereInput = {
    AND?: CoordinateWhereInput | CoordinateWhereInput[]
    OR?: CoordinateWhereInput[]
    NOT?: CoordinateWhereInput | CoordinateWhereInput[]
    id?: StringFilter<"Coordinate"> | string
    latitude?: FloatNullableFilter<"Coordinate"> | number | null
    longitude?: FloatNullableFilter<"Coordinate"> | number | null
    parkId?: StringFilter<"Coordinate"> | string
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }

  export type CoordinateOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    parkId?: SortOrder
    park?: ParkOrderByWithRelationInput
  }

  export type CoordinateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parkId?: string
    AND?: CoordinateWhereInput | CoordinateWhereInput[]
    OR?: CoordinateWhereInput[]
    NOT?: CoordinateWhereInput | CoordinateWhereInput[]
    latitude?: FloatNullableFilter<"Coordinate"> | number | null
    longitude?: FloatNullableFilter<"Coordinate"> | number | null
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }, "id" | "parkId">

  export type CoordinateOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    parkId?: SortOrder
    _count?: CoordinateCountOrderByAggregateInput
    _avg?: CoordinateAvgOrderByAggregateInput
    _max?: CoordinateMaxOrderByAggregateInput
    _min?: CoordinateMinOrderByAggregateInput
    _sum?: CoordinateSumOrderByAggregateInput
  }

  export type CoordinateScalarWhereWithAggregatesInput = {
    AND?: CoordinateScalarWhereWithAggregatesInput | CoordinateScalarWhereWithAggregatesInput[]
    OR?: CoordinateScalarWhereWithAggregatesInput[]
    NOT?: CoordinateScalarWhereWithAggregatesInput | CoordinateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coordinate"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Coordinate"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Coordinate"> | number | null
    parkId?: StringWithAggregatesFilter<"Coordinate"> | string
  }

  export type HoursWhereInput = {
    AND?: HoursWhereInput | HoursWhereInput[]
    OR?: HoursWhereInput[]
    NOT?: HoursWhereInput | HoursWhereInput[]
    id?: StringFilter<"Hours"> | string
    open?: StringNullableFilter<"Hours"> | string | null
    close?: StringNullableFilter<"Hours"> | string | null
    text_description?: StringNullableFilter<"Hours"> | string | null
    parkId?: StringFilter<"Hours"> | string
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }

  export type HoursOrderByWithRelationInput = {
    id?: SortOrder
    open?: SortOrderInput | SortOrder
    close?: SortOrderInput | SortOrder
    text_description?: SortOrderInput | SortOrder
    parkId?: SortOrder
    park?: ParkOrderByWithRelationInput
  }

  export type HoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parkId?: string
    AND?: HoursWhereInput | HoursWhereInput[]
    OR?: HoursWhereInput[]
    NOT?: HoursWhereInput | HoursWhereInput[]
    open?: StringNullableFilter<"Hours"> | string | null
    close?: StringNullableFilter<"Hours"> | string | null
    text_description?: StringNullableFilter<"Hours"> | string | null
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }, "id" | "parkId">

  export type HoursOrderByWithAggregationInput = {
    id?: SortOrder
    open?: SortOrderInput | SortOrder
    close?: SortOrderInput | SortOrder
    text_description?: SortOrderInput | SortOrder
    parkId?: SortOrder
    _count?: HoursCountOrderByAggregateInput
    _max?: HoursMaxOrderByAggregateInput
    _min?: HoursMinOrderByAggregateInput
  }

  export type HoursScalarWhereWithAggregatesInput = {
    AND?: HoursScalarWhereWithAggregatesInput | HoursScalarWhereWithAggregatesInput[]
    OR?: HoursScalarWhereWithAggregatesInput[]
    NOT?: HoursScalarWhereWithAggregatesInput | HoursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hours"> | string
    open?: StringNullableWithAggregatesFilter<"Hours"> | string | null
    close?: StringNullableWithAggregatesFilter<"Hours"> | string | null
    text_description?: StringNullableWithAggregatesFilter<"Hours"> | string | null
    parkId?: StringWithAggregatesFilter<"Hours"> | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    website?: StringNullableFilter<"Contact"> | string | null
    parkId?: StringFilter<"Contact"> | string
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    parkId?: SortOrder
    park?: ParkOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parkId?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    phone?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    website?: StringNullableFilter<"Contact"> | string | null
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }, "id" | "parkId">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    parkId?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    website?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    parkId?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type EntranceFeeWhereInput = {
    AND?: EntranceFeeWhereInput | EntranceFeeWhereInput[]
    OR?: EntranceFeeWhereInput[]
    NOT?: EntranceFeeWhereInput | EntranceFeeWhereInput[]
    id?: StringFilter<"EntranceFee"> | string
    daily?: FloatNullableFilter<"EntranceFee"> | number | null
    annual?: FloatNullableFilter<"EntranceFee"> | number | null
    text_description?: StringNullableFilter<"EntranceFee"> | string | null
    parkId?: StringFilter<"EntranceFee"> | string
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }

  export type EntranceFeeOrderByWithRelationInput = {
    id?: SortOrder
    daily?: SortOrderInput | SortOrder
    annual?: SortOrderInput | SortOrder
    text_description?: SortOrderInput | SortOrder
    parkId?: SortOrder
    park?: ParkOrderByWithRelationInput
  }

  export type EntranceFeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parkId?: string
    AND?: EntranceFeeWhereInput | EntranceFeeWhereInput[]
    OR?: EntranceFeeWhereInput[]
    NOT?: EntranceFeeWhereInput | EntranceFeeWhereInput[]
    daily?: FloatNullableFilter<"EntranceFee"> | number | null
    annual?: FloatNullableFilter<"EntranceFee"> | number | null
    text_description?: StringNullableFilter<"EntranceFee"> | string | null
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }, "id" | "parkId">

  export type EntranceFeeOrderByWithAggregationInput = {
    id?: SortOrder
    daily?: SortOrderInput | SortOrder
    annual?: SortOrderInput | SortOrder
    text_description?: SortOrderInput | SortOrder
    parkId?: SortOrder
    _count?: EntranceFeeCountOrderByAggregateInput
    _avg?: EntranceFeeAvgOrderByAggregateInput
    _max?: EntranceFeeMaxOrderByAggregateInput
    _min?: EntranceFeeMinOrderByAggregateInput
    _sum?: EntranceFeeSumOrderByAggregateInput
  }

  export type EntranceFeeScalarWhereWithAggregatesInput = {
    AND?: EntranceFeeScalarWhereWithAggregatesInput | EntranceFeeScalarWhereWithAggregatesInput[]
    OR?: EntranceFeeScalarWhereWithAggregatesInput[]
    NOT?: EntranceFeeScalarWhereWithAggregatesInput | EntranceFeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EntranceFee"> | string
    daily?: FloatNullableWithAggregatesFilter<"EntranceFee"> | number | null
    annual?: FloatNullableWithAggregatesFilter<"EntranceFee"> | number | null
    text_description?: StringNullableWithAggregatesFilter<"EntranceFee"> | string | null
    parkId?: StringWithAggregatesFilter<"EntranceFee"> | string
  }

  export type ParkingWhereInput = {
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    id?: StringFilter<"Parking"> | string
    totalSpaces?: IntNullableFilter<"Parking"> | number | null
    isFree?: BoolNullableFilter<"Parking"> | boolean | null
    parkId?: StringFilter<"Parking"> | string
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }

  export type ParkingOrderByWithRelationInput = {
    id?: SortOrder
    totalSpaces?: SortOrderInput | SortOrder
    isFree?: SortOrderInput | SortOrder
    parkId?: SortOrder
    park?: ParkOrderByWithRelationInput
  }

  export type ParkingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parkId?: string
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    totalSpaces?: IntNullableFilter<"Parking"> | number | null
    isFree?: BoolNullableFilter<"Parking"> | boolean | null
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }, "id" | "parkId">

  export type ParkingOrderByWithAggregationInput = {
    id?: SortOrder
    totalSpaces?: SortOrderInput | SortOrder
    isFree?: SortOrderInput | SortOrder
    parkId?: SortOrder
    _count?: ParkingCountOrderByAggregateInput
    _avg?: ParkingAvgOrderByAggregateInput
    _max?: ParkingMaxOrderByAggregateInput
    _min?: ParkingMinOrderByAggregateInput
    _sum?: ParkingSumOrderByAggregateInput
  }

  export type ParkingScalarWhereWithAggregatesInput = {
    AND?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    OR?: ParkingScalarWhereWithAggregatesInput[]
    NOT?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parking"> | string
    totalSpaces?: IntNullableWithAggregatesFilter<"Parking"> | number | null
    isFree?: BoolNullableWithAggregatesFilter<"Parking"> | boolean | null
    parkId?: StringWithAggregatesFilter<"Parking"> | string
  }

  export type SeasonalInfoWhereInput = {
    AND?: SeasonalInfoWhereInput | SeasonalInfoWhereInput[]
    OR?: SeasonalInfoWhereInput[]
    NOT?: SeasonalInfoWhereInput | SeasonalInfoWhereInput[]
    id?: StringFilter<"SeasonalInfo"> | string
    bestTimeToVisit?: StringNullableFilter<"SeasonalInfo"> | string | null
    seasonalClosures?: StringNullableListFilter<"SeasonalInfo">
    parkId?: StringFilter<"SeasonalInfo"> | string
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }

  export type SeasonalInfoOrderByWithRelationInput = {
    id?: SortOrder
    bestTimeToVisit?: SortOrderInput | SortOrder
    seasonalClosures?: SortOrder
    parkId?: SortOrder
    park?: ParkOrderByWithRelationInput
  }

  export type SeasonalInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parkId?: string
    AND?: SeasonalInfoWhereInput | SeasonalInfoWhereInput[]
    OR?: SeasonalInfoWhereInput[]
    NOT?: SeasonalInfoWhereInput | SeasonalInfoWhereInput[]
    bestTimeToVisit?: StringNullableFilter<"SeasonalInfo"> | string | null
    seasonalClosures?: StringNullableListFilter<"SeasonalInfo">
    park?: XOR<ParkScalarRelationFilter, ParkWhereInput>
  }, "id" | "parkId">

  export type SeasonalInfoOrderByWithAggregationInput = {
    id?: SortOrder
    bestTimeToVisit?: SortOrderInput | SortOrder
    seasonalClosures?: SortOrder
    parkId?: SortOrder
    _count?: SeasonalInfoCountOrderByAggregateInput
    _max?: SeasonalInfoMaxOrderByAggregateInput
    _min?: SeasonalInfoMinOrderByAggregateInput
  }

  export type SeasonalInfoScalarWhereWithAggregatesInput = {
    AND?: SeasonalInfoScalarWhereWithAggregatesInput | SeasonalInfoScalarWhereWithAggregatesInput[]
    OR?: SeasonalInfoScalarWhereWithAggregatesInput[]
    NOT?: SeasonalInfoScalarWhereWithAggregatesInput | SeasonalInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeasonalInfo"> | string
    bestTimeToVisit?: StringNullableWithAggregatesFilter<"SeasonalInfo"> | string | null
    seasonalClosures?: StringNullableListFilter<"SeasonalInfo">
    parkId?: StringWithAggregatesFilter<"SeasonalInfo"> | string
  }

  export type ParkCreateInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateCreateNestedOneWithoutParkInput
    hours?: HoursCreateNestedOneWithoutParkInput
    contact?: ContactCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeCreateNestedOneWithoutParkInput
    parking?: ParkingCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoCreateNestedOneWithoutParkInput
  }

  export type ParkUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateUncheckedCreateNestedOneWithoutParkInput
    hours?: HoursUncheckedCreateNestedOneWithoutParkInput
    contact?: ContactUncheckedCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeUncheckedCreateNestedOneWithoutParkInput
    parking?: ParkingUncheckedCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoUncheckedCreateNestedOneWithoutParkInput
  }

  export type ParkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneWithoutParkNestedInput
    hours?: HoursUpdateOneWithoutParkNestedInput
    contact?: ContactUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUpdateOneWithoutParkNestedInput
    parking?: ParkingUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUpdateOneWithoutParkNestedInput
  }

  export type ParkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUncheckedUpdateOneWithoutParkNestedInput
    hours?: HoursUncheckedUpdateOneWithoutParkNestedInput
    contact?: ContactUncheckedUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUncheckedUpdateOneWithoutParkNestedInput
    parking?: ParkingUncheckedUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUncheckedUpdateOneWithoutParkNestedInput
  }

  export type ParkCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoordinateCreateInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    park: ParkCreateNestedOneWithoutCoordinateInput
  }

  export type CoordinateUncheckedCreateInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    parkId: string
  }

  export type CoordinateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    park?: ParkUpdateOneRequiredWithoutCoordinateNestedInput
  }

  export type CoordinateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type CoordinateCreateManyInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    parkId: string
  }

  export type CoordinateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CoordinateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type HoursCreateInput = {
    id?: string
    open?: string | null
    close?: string | null
    text_description?: string | null
    park: ParkCreateNestedOneWithoutHoursInput
  }

  export type HoursUncheckedCreateInput = {
    id?: string
    open?: string | null
    close?: string | null
    text_description?: string | null
    parkId: string
  }

  export type HoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    open?: NullableStringFieldUpdateOperationsInput | string | null
    close?: NullableStringFieldUpdateOperationsInput | string | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
    park?: ParkUpdateOneRequiredWithoutHoursNestedInput
  }

  export type HoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    open?: NullableStringFieldUpdateOperationsInput | string | null
    close?: NullableStringFieldUpdateOperationsInput | string | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type HoursCreateManyInput = {
    id?: string
    open?: string | null
    close?: string | null
    text_description?: string | null
    parkId: string
  }

  export type HoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    open?: NullableStringFieldUpdateOperationsInput | string | null
    close?: NullableStringFieldUpdateOperationsInput | string | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    open?: NullableStringFieldUpdateOperationsInput | string | null
    close?: NullableStringFieldUpdateOperationsInput | string | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateInput = {
    id?: string
    phone?: string | null
    email?: string | null
    website?: string | null
    park: ParkCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    phone?: string | null
    email?: string | null
    website?: string | null
    parkId: string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    park?: ParkUpdateOneRequiredWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateManyInput = {
    id?: string
    phone?: string | null
    email?: string | null
    website?: string | null
    parkId: string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type EntranceFeeCreateInput = {
    id?: string
    daily?: number | null
    annual?: number | null
    text_description?: string | null
    park: ParkCreateNestedOneWithoutEntranceFeeInput
  }

  export type EntranceFeeUncheckedCreateInput = {
    id?: string
    daily?: number | null
    annual?: number | null
    text_description?: string | null
    parkId: string
  }

  export type EntranceFeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    daily?: NullableFloatFieldUpdateOperationsInput | number | null
    annual?: NullableFloatFieldUpdateOperationsInput | number | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
    park?: ParkUpdateOneRequiredWithoutEntranceFeeNestedInput
  }

  export type EntranceFeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    daily?: NullableFloatFieldUpdateOperationsInput | number | null
    annual?: NullableFloatFieldUpdateOperationsInput | number | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type EntranceFeeCreateManyInput = {
    id?: string
    daily?: number | null
    annual?: number | null
    text_description?: string | null
    parkId: string
  }

  export type EntranceFeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    daily?: NullableFloatFieldUpdateOperationsInput | number | null
    annual?: NullableFloatFieldUpdateOperationsInput | number | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntranceFeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    daily?: NullableFloatFieldUpdateOperationsInput | number | null
    annual?: NullableFloatFieldUpdateOperationsInput | number | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type ParkingCreateInput = {
    id?: string
    totalSpaces?: number | null
    isFree?: boolean | null
    park: ParkCreateNestedOneWithoutParkingInput
  }

  export type ParkingUncheckedCreateInput = {
    id?: string
    totalSpaces?: number | null
    isFree?: boolean | null
    parkId: string
  }

  export type ParkingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isFree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    park?: ParkUpdateOneRequiredWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isFree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type ParkingCreateManyInput = {
    id?: string
    totalSpaces?: number | null
    isFree?: boolean | null
    parkId: string
  }

  export type ParkingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isFree?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParkingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isFree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type SeasonalInfoCreateInput = {
    id?: string
    bestTimeToVisit?: string | null
    seasonalClosures?: SeasonalInfoCreateseasonalClosuresInput | string[]
    park: ParkCreateNestedOneWithoutSeasonalInfoInput
  }

  export type SeasonalInfoUncheckedCreateInput = {
    id?: string
    bestTimeToVisit?: string | null
    seasonalClosures?: SeasonalInfoCreateseasonalClosuresInput | string[]
    parkId: string
  }

  export type SeasonalInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bestTimeToVisit?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalClosures?: SeasonalInfoUpdateseasonalClosuresInput | string[]
    park?: ParkUpdateOneRequiredWithoutSeasonalInfoNestedInput
  }

  export type SeasonalInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bestTimeToVisit?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalClosures?: SeasonalInfoUpdateseasonalClosuresInput | string[]
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type SeasonalInfoCreateManyInput = {
    id?: string
    bestTimeToVisit?: string | null
    seasonalClosures?: SeasonalInfoCreateseasonalClosuresInput | string[]
    parkId: string
  }

  export type SeasonalInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bestTimeToVisit?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalClosures?: SeasonalInfoUpdateseasonalClosuresInput | string[]
  }

  export type SeasonalInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bestTimeToVisit?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalClosures?: SeasonalInfoUpdateseasonalClosuresInput | string[]
    parkId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CoordinateNullableScalarRelationFilter = {
    is?: CoordinateWhereInput | null
    isNot?: CoordinateWhereInput | null
  }

  export type HoursNullableScalarRelationFilter = {
    is?: HoursWhereInput | null
    isNot?: HoursWhereInput | null
  }

  export type ContactNullableScalarRelationFilter = {
    is?: ContactWhereInput | null
    isNot?: ContactWhereInput | null
  }

  export type EntranceFeeNullableScalarRelationFilter = {
    is?: EntranceFeeWhereInput | null
    isNot?: EntranceFeeWhereInput | null
  }

  export type ParkingNullableScalarRelationFilter = {
    is?: ParkingWhereInput | null
    isNot?: ParkingWhereInput | null
  }

  export type SeasonalInfoNullableScalarRelationFilter = {
    is?: SeasonalInfoWhereInput | null
    isNot?: SeasonalInfoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    activities?: SortOrder
    facilities?: SortOrder
    rules?: SortOrder
    isDogFriendly?: SortOrder
    isAccessible?: SortOrder
    image_from_listing?: SortOrder
    downloaded_image_path?: SortOrder
    info_url?: SortOrder
    recreation_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkAvgOrderByAggregateInput = {
    activities?: SortOrder
  }

  export type ParkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDogFriendly?: SortOrder
    isAccessible?: SortOrder
    image_from_listing?: SortOrder
    downloaded_image_path?: SortOrder
    info_url?: SortOrder
    recreation_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDogFriendly?: SortOrder
    isAccessible?: SortOrder
    image_from_listing?: SortOrder
    downloaded_image_path?: SortOrder
    info_url?: SortOrder
    recreation_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkSumOrderByAggregateInput = {
    activities?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ParkScalarRelationFilter = {
    is?: ParkWhereInput
    isNot?: ParkWhereInput
  }

  export type CoordinateCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    parkId?: SortOrder
  }

  export type CoordinateAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CoordinateMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    parkId?: SortOrder
  }

  export type CoordinateMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    parkId?: SortOrder
  }

  export type CoordinateSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type HoursCountOrderByAggregateInput = {
    id?: SortOrder
    open?: SortOrder
    close?: SortOrder
    text_description?: SortOrder
    parkId?: SortOrder
  }

  export type HoursMaxOrderByAggregateInput = {
    id?: SortOrder
    open?: SortOrder
    close?: SortOrder
    text_description?: SortOrder
    parkId?: SortOrder
  }

  export type HoursMinOrderByAggregateInput = {
    id?: SortOrder
    open?: SortOrder
    close?: SortOrder
    text_description?: SortOrder
    parkId?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    parkId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    parkId?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    parkId?: SortOrder
  }

  export type EntranceFeeCountOrderByAggregateInput = {
    id?: SortOrder
    daily?: SortOrder
    annual?: SortOrder
    text_description?: SortOrder
    parkId?: SortOrder
  }

  export type EntranceFeeAvgOrderByAggregateInput = {
    daily?: SortOrder
    annual?: SortOrder
  }

  export type EntranceFeeMaxOrderByAggregateInput = {
    id?: SortOrder
    daily?: SortOrder
    annual?: SortOrder
    text_description?: SortOrder
    parkId?: SortOrder
  }

  export type EntranceFeeMinOrderByAggregateInput = {
    id?: SortOrder
    daily?: SortOrder
    annual?: SortOrder
    text_description?: SortOrder
    parkId?: SortOrder
  }

  export type EntranceFeeSumOrderByAggregateInput = {
    daily?: SortOrder
    annual?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ParkingCountOrderByAggregateInput = {
    id?: SortOrder
    totalSpaces?: SortOrder
    isFree?: SortOrder
    parkId?: SortOrder
  }

  export type ParkingAvgOrderByAggregateInput = {
    totalSpaces?: SortOrder
  }

  export type ParkingMaxOrderByAggregateInput = {
    id?: SortOrder
    totalSpaces?: SortOrder
    isFree?: SortOrder
    parkId?: SortOrder
  }

  export type ParkingMinOrderByAggregateInput = {
    id?: SortOrder
    totalSpaces?: SortOrder
    isFree?: SortOrder
    parkId?: SortOrder
  }

  export type ParkingSumOrderByAggregateInput = {
    totalSpaces?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SeasonalInfoCountOrderByAggregateInput = {
    id?: SortOrder
    bestTimeToVisit?: SortOrder
    seasonalClosures?: SortOrder
    parkId?: SortOrder
  }

  export type SeasonalInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    bestTimeToVisit?: SortOrder
    parkId?: SortOrder
  }

  export type SeasonalInfoMinOrderByAggregateInput = {
    id?: SortOrder
    bestTimeToVisit?: SortOrder
    parkId?: SortOrder
  }

  export type ParkCreateactivitiesInput = {
    set: number[]
  }

  export type ParkCreatefacilitiesInput = {
    set: string[]
  }

  export type ParkCreaterulesInput = {
    set: string[]
  }

  export type CoordinateCreateNestedOneWithoutParkInput = {
    create?: XOR<CoordinateCreateWithoutParkInput, CoordinateUncheckedCreateWithoutParkInput>
    connectOrCreate?: CoordinateCreateOrConnectWithoutParkInput
    connect?: CoordinateWhereUniqueInput
  }

  export type HoursCreateNestedOneWithoutParkInput = {
    create?: XOR<HoursCreateWithoutParkInput, HoursUncheckedCreateWithoutParkInput>
    connectOrCreate?: HoursCreateOrConnectWithoutParkInput
    connect?: HoursWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutParkInput = {
    create?: XOR<ContactCreateWithoutParkInput, ContactUncheckedCreateWithoutParkInput>
    connectOrCreate?: ContactCreateOrConnectWithoutParkInput
    connect?: ContactWhereUniqueInput
  }

  export type EntranceFeeCreateNestedOneWithoutParkInput = {
    create?: XOR<EntranceFeeCreateWithoutParkInput, EntranceFeeUncheckedCreateWithoutParkInput>
    connectOrCreate?: EntranceFeeCreateOrConnectWithoutParkInput
    connect?: EntranceFeeWhereUniqueInput
  }

  export type ParkingCreateNestedOneWithoutParkInput = {
    create?: XOR<ParkingCreateWithoutParkInput, ParkingUncheckedCreateWithoutParkInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutParkInput
    connect?: ParkingWhereUniqueInput
  }

  export type SeasonalInfoCreateNestedOneWithoutParkInput = {
    create?: XOR<SeasonalInfoCreateWithoutParkInput, SeasonalInfoUncheckedCreateWithoutParkInput>
    connectOrCreate?: SeasonalInfoCreateOrConnectWithoutParkInput
    connect?: SeasonalInfoWhereUniqueInput
  }

  export type CoordinateUncheckedCreateNestedOneWithoutParkInput = {
    create?: XOR<CoordinateCreateWithoutParkInput, CoordinateUncheckedCreateWithoutParkInput>
    connectOrCreate?: CoordinateCreateOrConnectWithoutParkInput
    connect?: CoordinateWhereUniqueInput
  }

  export type HoursUncheckedCreateNestedOneWithoutParkInput = {
    create?: XOR<HoursCreateWithoutParkInput, HoursUncheckedCreateWithoutParkInput>
    connectOrCreate?: HoursCreateOrConnectWithoutParkInput
    connect?: HoursWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedOneWithoutParkInput = {
    create?: XOR<ContactCreateWithoutParkInput, ContactUncheckedCreateWithoutParkInput>
    connectOrCreate?: ContactCreateOrConnectWithoutParkInput
    connect?: ContactWhereUniqueInput
  }

  export type EntranceFeeUncheckedCreateNestedOneWithoutParkInput = {
    create?: XOR<EntranceFeeCreateWithoutParkInput, EntranceFeeUncheckedCreateWithoutParkInput>
    connectOrCreate?: EntranceFeeCreateOrConnectWithoutParkInput
    connect?: EntranceFeeWhereUniqueInput
  }

  export type ParkingUncheckedCreateNestedOneWithoutParkInput = {
    create?: XOR<ParkingCreateWithoutParkInput, ParkingUncheckedCreateWithoutParkInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutParkInput
    connect?: ParkingWhereUniqueInput
  }

  export type SeasonalInfoUncheckedCreateNestedOneWithoutParkInput = {
    create?: XOR<SeasonalInfoCreateWithoutParkInput, SeasonalInfoUncheckedCreateWithoutParkInput>
    connectOrCreate?: SeasonalInfoCreateOrConnectWithoutParkInput
    connect?: SeasonalInfoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ParkUpdateactivitiesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ParkUpdatefacilitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ParkUpdaterulesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CoordinateUpdateOneWithoutParkNestedInput = {
    create?: XOR<CoordinateCreateWithoutParkInput, CoordinateUncheckedCreateWithoutParkInput>
    connectOrCreate?: CoordinateCreateOrConnectWithoutParkInput
    upsert?: CoordinateUpsertWithoutParkInput
    disconnect?: CoordinateWhereInput | boolean
    delete?: CoordinateWhereInput | boolean
    connect?: CoordinateWhereUniqueInput
    update?: XOR<XOR<CoordinateUpdateToOneWithWhereWithoutParkInput, CoordinateUpdateWithoutParkInput>, CoordinateUncheckedUpdateWithoutParkInput>
  }

  export type HoursUpdateOneWithoutParkNestedInput = {
    create?: XOR<HoursCreateWithoutParkInput, HoursUncheckedCreateWithoutParkInput>
    connectOrCreate?: HoursCreateOrConnectWithoutParkInput
    upsert?: HoursUpsertWithoutParkInput
    disconnect?: HoursWhereInput | boolean
    delete?: HoursWhereInput | boolean
    connect?: HoursWhereUniqueInput
    update?: XOR<XOR<HoursUpdateToOneWithWhereWithoutParkInput, HoursUpdateWithoutParkInput>, HoursUncheckedUpdateWithoutParkInput>
  }

  export type ContactUpdateOneWithoutParkNestedInput = {
    create?: XOR<ContactCreateWithoutParkInput, ContactUncheckedCreateWithoutParkInput>
    connectOrCreate?: ContactCreateOrConnectWithoutParkInput
    upsert?: ContactUpsertWithoutParkInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutParkInput, ContactUpdateWithoutParkInput>, ContactUncheckedUpdateWithoutParkInput>
  }

  export type EntranceFeeUpdateOneWithoutParkNestedInput = {
    create?: XOR<EntranceFeeCreateWithoutParkInput, EntranceFeeUncheckedCreateWithoutParkInput>
    connectOrCreate?: EntranceFeeCreateOrConnectWithoutParkInput
    upsert?: EntranceFeeUpsertWithoutParkInput
    disconnect?: EntranceFeeWhereInput | boolean
    delete?: EntranceFeeWhereInput | boolean
    connect?: EntranceFeeWhereUniqueInput
    update?: XOR<XOR<EntranceFeeUpdateToOneWithWhereWithoutParkInput, EntranceFeeUpdateWithoutParkInput>, EntranceFeeUncheckedUpdateWithoutParkInput>
  }

  export type ParkingUpdateOneWithoutParkNestedInput = {
    create?: XOR<ParkingCreateWithoutParkInput, ParkingUncheckedCreateWithoutParkInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutParkInput
    upsert?: ParkingUpsertWithoutParkInput
    disconnect?: ParkingWhereInput | boolean
    delete?: ParkingWhereInput | boolean
    connect?: ParkingWhereUniqueInput
    update?: XOR<XOR<ParkingUpdateToOneWithWhereWithoutParkInput, ParkingUpdateWithoutParkInput>, ParkingUncheckedUpdateWithoutParkInput>
  }

  export type SeasonalInfoUpdateOneWithoutParkNestedInput = {
    create?: XOR<SeasonalInfoCreateWithoutParkInput, SeasonalInfoUncheckedCreateWithoutParkInput>
    connectOrCreate?: SeasonalInfoCreateOrConnectWithoutParkInput
    upsert?: SeasonalInfoUpsertWithoutParkInput
    disconnect?: SeasonalInfoWhereInput | boolean
    delete?: SeasonalInfoWhereInput | boolean
    connect?: SeasonalInfoWhereUniqueInput
    update?: XOR<XOR<SeasonalInfoUpdateToOneWithWhereWithoutParkInput, SeasonalInfoUpdateWithoutParkInput>, SeasonalInfoUncheckedUpdateWithoutParkInput>
  }

  export type CoordinateUncheckedUpdateOneWithoutParkNestedInput = {
    create?: XOR<CoordinateCreateWithoutParkInput, CoordinateUncheckedCreateWithoutParkInput>
    connectOrCreate?: CoordinateCreateOrConnectWithoutParkInput
    upsert?: CoordinateUpsertWithoutParkInput
    disconnect?: CoordinateWhereInput | boolean
    delete?: CoordinateWhereInput | boolean
    connect?: CoordinateWhereUniqueInput
    update?: XOR<XOR<CoordinateUpdateToOneWithWhereWithoutParkInput, CoordinateUpdateWithoutParkInput>, CoordinateUncheckedUpdateWithoutParkInput>
  }

  export type HoursUncheckedUpdateOneWithoutParkNestedInput = {
    create?: XOR<HoursCreateWithoutParkInput, HoursUncheckedCreateWithoutParkInput>
    connectOrCreate?: HoursCreateOrConnectWithoutParkInput
    upsert?: HoursUpsertWithoutParkInput
    disconnect?: HoursWhereInput | boolean
    delete?: HoursWhereInput | boolean
    connect?: HoursWhereUniqueInput
    update?: XOR<XOR<HoursUpdateToOneWithWhereWithoutParkInput, HoursUpdateWithoutParkInput>, HoursUncheckedUpdateWithoutParkInput>
  }

  export type ContactUncheckedUpdateOneWithoutParkNestedInput = {
    create?: XOR<ContactCreateWithoutParkInput, ContactUncheckedCreateWithoutParkInput>
    connectOrCreate?: ContactCreateOrConnectWithoutParkInput
    upsert?: ContactUpsertWithoutParkInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutParkInput, ContactUpdateWithoutParkInput>, ContactUncheckedUpdateWithoutParkInput>
  }

  export type EntranceFeeUncheckedUpdateOneWithoutParkNestedInput = {
    create?: XOR<EntranceFeeCreateWithoutParkInput, EntranceFeeUncheckedCreateWithoutParkInput>
    connectOrCreate?: EntranceFeeCreateOrConnectWithoutParkInput
    upsert?: EntranceFeeUpsertWithoutParkInput
    disconnect?: EntranceFeeWhereInput | boolean
    delete?: EntranceFeeWhereInput | boolean
    connect?: EntranceFeeWhereUniqueInput
    update?: XOR<XOR<EntranceFeeUpdateToOneWithWhereWithoutParkInput, EntranceFeeUpdateWithoutParkInput>, EntranceFeeUncheckedUpdateWithoutParkInput>
  }

  export type ParkingUncheckedUpdateOneWithoutParkNestedInput = {
    create?: XOR<ParkingCreateWithoutParkInput, ParkingUncheckedCreateWithoutParkInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutParkInput
    upsert?: ParkingUpsertWithoutParkInput
    disconnect?: ParkingWhereInput | boolean
    delete?: ParkingWhereInput | boolean
    connect?: ParkingWhereUniqueInput
    update?: XOR<XOR<ParkingUpdateToOneWithWhereWithoutParkInput, ParkingUpdateWithoutParkInput>, ParkingUncheckedUpdateWithoutParkInput>
  }

  export type SeasonalInfoUncheckedUpdateOneWithoutParkNestedInput = {
    create?: XOR<SeasonalInfoCreateWithoutParkInput, SeasonalInfoUncheckedCreateWithoutParkInput>
    connectOrCreate?: SeasonalInfoCreateOrConnectWithoutParkInput
    upsert?: SeasonalInfoUpsertWithoutParkInput
    disconnect?: SeasonalInfoWhereInput | boolean
    delete?: SeasonalInfoWhereInput | boolean
    connect?: SeasonalInfoWhereUniqueInput
    update?: XOR<XOR<SeasonalInfoUpdateToOneWithWhereWithoutParkInput, SeasonalInfoUpdateWithoutParkInput>, SeasonalInfoUncheckedUpdateWithoutParkInput>
  }

  export type ParkCreateNestedOneWithoutCoordinateInput = {
    create?: XOR<ParkCreateWithoutCoordinateInput, ParkUncheckedCreateWithoutCoordinateInput>
    connectOrCreate?: ParkCreateOrConnectWithoutCoordinateInput
    connect?: ParkWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkUpdateOneRequiredWithoutCoordinateNestedInput = {
    create?: XOR<ParkCreateWithoutCoordinateInput, ParkUncheckedCreateWithoutCoordinateInput>
    connectOrCreate?: ParkCreateOrConnectWithoutCoordinateInput
    upsert?: ParkUpsertWithoutCoordinateInput
    connect?: ParkWhereUniqueInput
    update?: XOR<XOR<ParkUpdateToOneWithWhereWithoutCoordinateInput, ParkUpdateWithoutCoordinateInput>, ParkUncheckedUpdateWithoutCoordinateInput>
  }

  export type ParkCreateNestedOneWithoutHoursInput = {
    create?: XOR<ParkCreateWithoutHoursInput, ParkUncheckedCreateWithoutHoursInput>
    connectOrCreate?: ParkCreateOrConnectWithoutHoursInput
    connect?: ParkWhereUniqueInput
  }

  export type ParkUpdateOneRequiredWithoutHoursNestedInput = {
    create?: XOR<ParkCreateWithoutHoursInput, ParkUncheckedCreateWithoutHoursInput>
    connectOrCreate?: ParkCreateOrConnectWithoutHoursInput
    upsert?: ParkUpsertWithoutHoursInput
    connect?: ParkWhereUniqueInput
    update?: XOR<XOR<ParkUpdateToOneWithWhereWithoutHoursInput, ParkUpdateWithoutHoursInput>, ParkUncheckedUpdateWithoutHoursInput>
  }

  export type ParkCreateNestedOneWithoutContactInput = {
    create?: XOR<ParkCreateWithoutContactInput, ParkUncheckedCreateWithoutContactInput>
    connectOrCreate?: ParkCreateOrConnectWithoutContactInput
    connect?: ParkWhereUniqueInput
  }

  export type ParkUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<ParkCreateWithoutContactInput, ParkUncheckedCreateWithoutContactInput>
    connectOrCreate?: ParkCreateOrConnectWithoutContactInput
    upsert?: ParkUpsertWithoutContactInput
    connect?: ParkWhereUniqueInput
    update?: XOR<XOR<ParkUpdateToOneWithWhereWithoutContactInput, ParkUpdateWithoutContactInput>, ParkUncheckedUpdateWithoutContactInput>
  }

  export type ParkCreateNestedOneWithoutEntranceFeeInput = {
    create?: XOR<ParkCreateWithoutEntranceFeeInput, ParkUncheckedCreateWithoutEntranceFeeInput>
    connectOrCreate?: ParkCreateOrConnectWithoutEntranceFeeInput
    connect?: ParkWhereUniqueInput
  }

  export type ParkUpdateOneRequiredWithoutEntranceFeeNestedInput = {
    create?: XOR<ParkCreateWithoutEntranceFeeInput, ParkUncheckedCreateWithoutEntranceFeeInput>
    connectOrCreate?: ParkCreateOrConnectWithoutEntranceFeeInput
    upsert?: ParkUpsertWithoutEntranceFeeInput
    connect?: ParkWhereUniqueInput
    update?: XOR<XOR<ParkUpdateToOneWithWhereWithoutEntranceFeeInput, ParkUpdateWithoutEntranceFeeInput>, ParkUncheckedUpdateWithoutEntranceFeeInput>
  }

  export type ParkCreateNestedOneWithoutParkingInput = {
    create?: XOR<ParkCreateWithoutParkingInput, ParkUncheckedCreateWithoutParkingInput>
    connectOrCreate?: ParkCreateOrConnectWithoutParkingInput
    connect?: ParkWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkUpdateOneRequiredWithoutParkingNestedInput = {
    create?: XOR<ParkCreateWithoutParkingInput, ParkUncheckedCreateWithoutParkingInput>
    connectOrCreate?: ParkCreateOrConnectWithoutParkingInput
    upsert?: ParkUpsertWithoutParkingInput
    connect?: ParkWhereUniqueInput
    update?: XOR<XOR<ParkUpdateToOneWithWhereWithoutParkingInput, ParkUpdateWithoutParkingInput>, ParkUncheckedUpdateWithoutParkingInput>
  }

  export type SeasonalInfoCreateseasonalClosuresInput = {
    set: string[]
  }

  export type ParkCreateNestedOneWithoutSeasonalInfoInput = {
    create?: XOR<ParkCreateWithoutSeasonalInfoInput, ParkUncheckedCreateWithoutSeasonalInfoInput>
    connectOrCreate?: ParkCreateOrConnectWithoutSeasonalInfoInput
    connect?: ParkWhereUniqueInput
  }

  export type SeasonalInfoUpdateseasonalClosuresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ParkUpdateOneRequiredWithoutSeasonalInfoNestedInput = {
    create?: XOR<ParkCreateWithoutSeasonalInfoInput, ParkUncheckedCreateWithoutSeasonalInfoInput>
    connectOrCreate?: ParkCreateOrConnectWithoutSeasonalInfoInput
    upsert?: ParkUpsertWithoutSeasonalInfoInput
    connect?: ParkWhereUniqueInput
    update?: XOR<XOR<ParkUpdateToOneWithWhereWithoutSeasonalInfoInput, ParkUpdateWithoutSeasonalInfoInput>, ParkUncheckedUpdateWithoutSeasonalInfoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CoordinateCreateWithoutParkInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
  }

  export type CoordinateUncheckedCreateWithoutParkInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
  }

  export type CoordinateCreateOrConnectWithoutParkInput = {
    where: CoordinateWhereUniqueInput
    create: XOR<CoordinateCreateWithoutParkInput, CoordinateUncheckedCreateWithoutParkInput>
  }

  export type HoursCreateWithoutParkInput = {
    id?: string
    open?: string | null
    close?: string | null
    text_description?: string | null
  }

  export type HoursUncheckedCreateWithoutParkInput = {
    id?: string
    open?: string | null
    close?: string | null
    text_description?: string | null
  }

  export type HoursCreateOrConnectWithoutParkInput = {
    where: HoursWhereUniqueInput
    create: XOR<HoursCreateWithoutParkInput, HoursUncheckedCreateWithoutParkInput>
  }

  export type ContactCreateWithoutParkInput = {
    id?: string
    phone?: string | null
    email?: string | null
    website?: string | null
  }

  export type ContactUncheckedCreateWithoutParkInput = {
    id?: string
    phone?: string | null
    email?: string | null
    website?: string | null
  }

  export type ContactCreateOrConnectWithoutParkInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutParkInput, ContactUncheckedCreateWithoutParkInput>
  }

  export type EntranceFeeCreateWithoutParkInput = {
    id?: string
    daily?: number | null
    annual?: number | null
    text_description?: string | null
  }

  export type EntranceFeeUncheckedCreateWithoutParkInput = {
    id?: string
    daily?: number | null
    annual?: number | null
    text_description?: string | null
  }

  export type EntranceFeeCreateOrConnectWithoutParkInput = {
    where: EntranceFeeWhereUniqueInput
    create: XOR<EntranceFeeCreateWithoutParkInput, EntranceFeeUncheckedCreateWithoutParkInput>
  }

  export type ParkingCreateWithoutParkInput = {
    id?: string
    totalSpaces?: number | null
    isFree?: boolean | null
  }

  export type ParkingUncheckedCreateWithoutParkInput = {
    id?: string
    totalSpaces?: number | null
    isFree?: boolean | null
  }

  export type ParkingCreateOrConnectWithoutParkInput = {
    where: ParkingWhereUniqueInput
    create: XOR<ParkingCreateWithoutParkInput, ParkingUncheckedCreateWithoutParkInput>
  }

  export type SeasonalInfoCreateWithoutParkInput = {
    id?: string
    bestTimeToVisit?: string | null
    seasonalClosures?: SeasonalInfoCreateseasonalClosuresInput | string[]
  }

  export type SeasonalInfoUncheckedCreateWithoutParkInput = {
    id?: string
    bestTimeToVisit?: string | null
    seasonalClosures?: SeasonalInfoCreateseasonalClosuresInput | string[]
  }

  export type SeasonalInfoCreateOrConnectWithoutParkInput = {
    where: SeasonalInfoWhereUniqueInput
    create: XOR<SeasonalInfoCreateWithoutParkInput, SeasonalInfoUncheckedCreateWithoutParkInput>
  }

  export type CoordinateUpsertWithoutParkInput = {
    update: XOR<CoordinateUpdateWithoutParkInput, CoordinateUncheckedUpdateWithoutParkInput>
    create: XOR<CoordinateCreateWithoutParkInput, CoordinateUncheckedCreateWithoutParkInput>
    where?: CoordinateWhereInput
  }

  export type CoordinateUpdateToOneWithWhereWithoutParkInput = {
    where?: CoordinateWhereInput
    data: XOR<CoordinateUpdateWithoutParkInput, CoordinateUncheckedUpdateWithoutParkInput>
  }

  export type CoordinateUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CoordinateUncheckedUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HoursUpsertWithoutParkInput = {
    update: XOR<HoursUpdateWithoutParkInput, HoursUncheckedUpdateWithoutParkInput>
    create: XOR<HoursCreateWithoutParkInput, HoursUncheckedCreateWithoutParkInput>
    where?: HoursWhereInput
  }

  export type HoursUpdateToOneWithWhereWithoutParkInput = {
    where?: HoursWhereInput
    data: XOR<HoursUpdateWithoutParkInput, HoursUncheckedUpdateWithoutParkInput>
  }

  export type HoursUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    open?: NullableStringFieldUpdateOperationsInput | string | null
    close?: NullableStringFieldUpdateOperationsInput | string | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HoursUncheckedUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    open?: NullableStringFieldUpdateOperationsInput | string | null
    close?: NullableStringFieldUpdateOperationsInput | string | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUpsertWithoutParkInput = {
    update: XOR<ContactUpdateWithoutParkInput, ContactUncheckedUpdateWithoutParkInput>
    create: XOR<ContactCreateWithoutParkInput, ContactUncheckedCreateWithoutParkInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutParkInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutParkInput, ContactUncheckedUpdateWithoutParkInput>
  }

  export type ContactUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntranceFeeUpsertWithoutParkInput = {
    update: XOR<EntranceFeeUpdateWithoutParkInput, EntranceFeeUncheckedUpdateWithoutParkInput>
    create: XOR<EntranceFeeCreateWithoutParkInput, EntranceFeeUncheckedCreateWithoutParkInput>
    where?: EntranceFeeWhereInput
  }

  export type EntranceFeeUpdateToOneWithWhereWithoutParkInput = {
    where?: EntranceFeeWhereInput
    data: XOR<EntranceFeeUpdateWithoutParkInput, EntranceFeeUncheckedUpdateWithoutParkInput>
  }

  export type EntranceFeeUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    daily?: NullableFloatFieldUpdateOperationsInput | number | null
    annual?: NullableFloatFieldUpdateOperationsInput | number | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntranceFeeUncheckedUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    daily?: NullableFloatFieldUpdateOperationsInput | number | null
    annual?: NullableFloatFieldUpdateOperationsInput | number | null
    text_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingUpsertWithoutParkInput = {
    update: XOR<ParkingUpdateWithoutParkInput, ParkingUncheckedUpdateWithoutParkInput>
    create: XOR<ParkingCreateWithoutParkInput, ParkingUncheckedCreateWithoutParkInput>
    where?: ParkingWhereInput
  }

  export type ParkingUpdateToOneWithWhereWithoutParkInput = {
    where?: ParkingWhereInput
    data: XOR<ParkingUpdateWithoutParkInput, ParkingUncheckedUpdateWithoutParkInput>
  }

  export type ParkingUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isFree?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParkingUncheckedUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isFree?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SeasonalInfoUpsertWithoutParkInput = {
    update: XOR<SeasonalInfoUpdateWithoutParkInput, SeasonalInfoUncheckedUpdateWithoutParkInput>
    create: XOR<SeasonalInfoCreateWithoutParkInput, SeasonalInfoUncheckedCreateWithoutParkInput>
    where?: SeasonalInfoWhereInput
  }

  export type SeasonalInfoUpdateToOneWithWhereWithoutParkInput = {
    where?: SeasonalInfoWhereInput
    data: XOR<SeasonalInfoUpdateWithoutParkInput, SeasonalInfoUncheckedUpdateWithoutParkInput>
  }

  export type SeasonalInfoUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    bestTimeToVisit?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalClosures?: SeasonalInfoUpdateseasonalClosuresInput | string[]
  }

  export type SeasonalInfoUncheckedUpdateWithoutParkInput = {
    id?: StringFieldUpdateOperationsInput | string
    bestTimeToVisit?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalClosures?: SeasonalInfoUpdateseasonalClosuresInput | string[]
  }

  export type ParkCreateWithoutCoordinateInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hours?: HoursCreateNestedOneWithoutParkInput
    contact?: ContactCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeCreateNestedOneWithoutParkInput
    parking?: ParkingCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoCreateNestedOneWithoutParkInput
  }

  export type ParkUncheckedCreateWithoutCoordinateInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hours?: HoursUncheckedCreateNestedOneWithoutParkInput
    contact?: ContactUncheckedCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeUncheckedCreateNestedOneWithoutParkInput
    parking?: ParkingUncheckedCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoUncheckedCreateNestedOneWithoutParkInput
  }

  export type ParkCreateOrConnectWithoutCoordinateInput = {
    where: ParkWhereUniqueInput
    create: XOR<ParkCreateWithoutCoordinateInput, ParkUncheckedCreateWithoutCoordinateInput>
  }

  export type ParkUpsertWithoutCoordinateInput = {
    update: XOR<ParkUpdateWithoutCoordinateInput, ParkUncheckedUpdateWithoutCoordinateInput>
    create: XOR<ParkCreateWithoutCoordinateInput, ParkUncheckedCreateWithoutCoordinateInput>
    where?: ParkWhereInput
  }

  export type ParkUpdateToOneWithWhereWithoutCoordinateInput = {
    where?: ParkWhereInput
    data: XOR<ParkUpdateWithoutCoordinateInput, ParkUncheckedUpdateWithoutCoordinateInput>
  }

  export type ParkUpdateWithoutCoordinateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: HoursUpdateOneWithoutParkNestedInput
    contact?: ContactUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUpdateOneWithoutParkNestedInput
    parking?: ParkingUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUpdateOneWithoutParkNestedInput
  }

  export type ParkUncheckedUpdateWithoutCoordinateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: HoursUncheckedUpdateOneWithoutParkNestedInput
    contact?: ContactUncheckedUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUncheckedUpdateOneWithoutParkNestedInput
    parking?: ParkingUncheckedUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUncheckedUpdateOneWithoutParkNestedInput
  }

  export type ParkCreateWithoutHoursInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateCreateNestedOneWithoutParkInput
    contact?: ContactCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeCreateNestedOneWithoutParkInput
    parking?: ParkingCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoCreateNestedOneWithoutParkInput
  }

  export type ParkUncheckedCreateWithoutHoursInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateUncheckedCreateNestedOneWithoutParkInput
    contact?: ContactUncheckedCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeUncheckedCreateNestedOneWithoutParkInput
    parking?: ParkingUncheckedCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoUncheckedCreateNestedOneWithoutParkInput
  }

  export type ParkCreateOrConnectWithoutHoursInput = {
    where: ParkWhereUniqueInput
    create: XOR<ParkCreateWithoutHoursInput, ParkUncheckedCreateWithoutHoursInput>
  }

  export type ParkUpsertWithoutHoursInput = {
    update: XOR<ParkUpdateWithoutHoursInput, ParkUncheckedUpdateWithoutHoursInput>
    create: XOR<ParkCreateWithoutHoursInput, ParkUncheckedCreateWithoutHoursInput>
    where?: ParkWhereInput
  }

  export type ParkUpdateToOneWithWhereWithoutHoursInput = {
    where?: ParkWhereInput
    data: XOR<ParkUpdateWithoutHoursInput, ParkUncheckedUpdateWithoutHoursInput>
  }

  export type ParkUpdateWithoutHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneWithoutParkNestedInput
    contact?: ContactUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUpdateOneWithoutParkNestedInput
    parking?: ParkingUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUpdateOneWithoutParkNestedInput
  }

  export type ParkUncheckedUpdateWithoutHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUncheckedUpdateOneWithoutParkNestedInput
    contact?: ContactUncheckedUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUncheckedUpdateOneWithoutParkNestedInput
    parking?: ParkingUncheckedUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUncheckedUpdateOneWithoutParkNestedInput
  }

  export type ParkCreateWithoutContactInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateCreateNestedOneWithoutParkInput
    hours?: HoursCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeCreateNestedOneWithoutParkInput
    parking?: ParkingCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoCreateNestedOneWithoutParkInput
  }

  export type ParkUncheckedCreateWithoutContactInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateUncheckedCreateNestedOneWithoutParkInput
    hours?: HoursUncheckedCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeUncheckedCreateNestedOneWithoutParkInput
    parking?: ParkingUncheckedCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoUncheckedCreateNestedOneWithoutParkInput
  }

  export type ParkCreateOrConnectWithoutContactInput = {
    where: ParkWhereUniqueInput
    create: XOR<ParkCreateWithoutContactInput, ParkUncheckedCreateWithoutContactInput>
  }

  export type ParkUpsertWithoutContactInput = {
    update: XOR<ParkUpdateWithoutContactInput, ParkUncheckedUpdateWithoutContactInput>
    create: XOR<ParkCreateWithoutContactInput, ParkUncheckedCreateWithoutContactInput>
    where?: ParkWhereInput
  }

  export type ParkUpdateToOneWithWhereWithoutContactInput = {
    where?: ParkWhereInput
    data: XOR<ParkUpdateWithoutContactInput, ParkUncheckedUpdateWithoutContactInput>
  }

  export type ParkUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneWithoutParkNestedInput
    hours?: HoursUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUpdateOneWithoutParkNestedInput
    parking?: ParkingUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUpdateOneWithoutParkNestedInput
  }

  export type ParkUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUncheckedUpdateOneWithoutParkNestedInput
    hours?: HoursUncheckedUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUncheckedUpdateOneWithoutParkNestedInput
    parking?: ParkingUncheckedUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUncheckedUpdateOneWithoutParkNestedInput
  }

  export type ParkCreateWithoutEntranceFeeInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateCreateNestedOneWithoutParkInput
    hours?: HoursCreateNestedOneWithoutParkInput
    contact?: ContactCreateNestedOneWithoutParkInput
    parking?: ParkingCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoCreateNestedOneWithoutParkInput
  }

  export type ParkUncheckedCreateWithoutEntranceFeeInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateUncheckedCreateNestedOneWithoutParkInput
    hours?: HoursUncheckedCreateNestedOneWithoutParkInput
    contact?: ContactUncheckedCreateNestedOneWithoutParkInput
    parking?: ParkingUncheckedCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoUncheckedCreateNestedOneWithoutParkInput
  }

  export type ParkCreateOrConnectWithoutEntranceFeeInput = {
    where: ParkWhereUniqueInput
    create: XOR<ParkCreateWithoutEntranceFeeInput, ParkUncheckedCreateWithoutEntranceFeeInput>
  }

  export type ParkUpsertWithoutEntranceFeeInput = {
    update: XOR<ParkUpdateWithoutEntranceFeeInput, ParkUncheckedUpdateWithoutEntranceFeeInput>
    create: XOR<ParkCreateWithoutEntranceFeeInput, ParkUncheckedCreateWithoutEntranceFeeInput>
    where?: ParkWhereInput
  }

  export type ParkUpdateToOneWithWhereWithoutEntranceFeeInput = {
    where?: ParkWhereInput
    data: XOR<ParkUpdateWithoutEntranceFeeInput, ParkUncheckedUpdateWithoutEntranceFeeInput>
  }

  export type ParkUpdateWithoutEntranceFeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneWithoutParkNestedInput
    hours?: HoursUpdateOneWithoutParkNestedInput
    contact?: ContactUpdateOneWithoutParkNestedInput
    parking?: ParkingUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUpdateOneWithoutParkNestedInput
  }

  export type ParkUncheckedUpdateWithoutEntranceFeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUncheckedUpdateOneWithoutParkNestedInput
    hours?: HoursUncheckedUpdateOneWithoutParkNestedInput
    contact?: ContactUncheckedUpdateOneWithoutParkNestedInput
    parking?: ParkingUncheckedUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUncheckedUpdateOneWithoutParkNestedInput
  }

  export type ParkCreateWithoutParkingInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateCreateNestedOneWithoutParkInput
    hours?: HoursCreateNestedOneWithoutParkInput
    contact?: ContactCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoCreateNestedOneWithoutParkInput
  }

  export type ParkUncheckedCreateWithoutParkingInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateUncheckedCreateNestedOneWithoutParkInput
    hours?: HoursUncheckedCreateNestedOneWithoutParkInput
    contact?: ContactUncheckedCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeUncheckedCreateNestedOneWithoutParkInput
    seasonalInfo?: SeasonalInfoUncheckedCreateNestedOneWithoutParkInput
  }

  export type ParkCreateOrConnectWithoutParkingInput = {
    where: ParkWhereUniqueInput
    create: XOR<ParkCreateWithoutParkingInput, ParkUncheckedCreateWithoutParkingInput>
  }

  export type ParkUpsertWithoutParkingInput = {
    update: XOR<ParkUpdateWithoutParkingInput, ParkUncheckedUpdateWithoutParkingInput>
    create: XOR<ParkCreateWithoutParkingInput, ParkUncheckedCreateWithoutParkingInput>
    where?: ParkWhereInput
  }

  export type ParkUpdateToOneWithWhereWithoutParkingInput = {
    where?: ParkWhereInput
    data: XOR<ParkUpdateWithoutParkingInput, ParkUncheckedUpdateWithoutParkingInput>
  }

  export type ParkUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneWithoutParkNestedInput
    hours?: HoursUpdateOneWithoutParkNestedInput
    contact?: ContactUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUpdateOneWithoutParkNestedInput
  }

  export type ParkUncheckedUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUncheckedUpdateOneWithoutParkNestedInput
    hours?: HoursUncheckedUpdateOneWithoutParkNestedInput
    contact?: ContactUncheckedUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUncheckedUpdateOneWithoutParkNestedInput
    seasonalInfo?: SeasonalInfoUncheckedUpdateOneWithoutParkNestedInput
  }

  export type ParkCreateWithoutSeasonalInfoInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateCreateNestedOneWithoutParkInput
    hours?: HoursCreateNestedOneWithoutParkInput
    contact?: ContactCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeCreateNestedOneWithoutParkInput
    parking?: ParkingCreateNestedOneWithoutParkInput
  }

  export type ParkUncheckedCreateWithoutSeasonalInfoInput = {
    id?: string
    name: string
    description?: string | null
    activities?: ParkCreateactivitiesInput | number[]
    facilities?: ParkCreatefacilitiesInput | string[]
    rules?: ParkCreaterulesInput | string[]
    isDogFriendly?: boolean | null
    isAccessible?: boolean | null
    image_from_listing?: string | null
    downloaded_image_path?: string | null
    info_url?: string | null
    recreation_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate?: CoordinateUncheckedCreateNestedOneWithoutParkInput
    hours?: HoursUncheckedCreateNestedOneWithoutParkInput
    contact?: ContactUncheckedCreateNestedOneWithoutParkInput
    entranceFee?: EntranceFeeUncheckedCreateNestedOneWithoutParkInput
    parking?: ParkingUncheckedCreateNestedOneWithoutParkInput
  }

  export type ParkCreateOrConnectWithoutSeasonalInfoInput = {
    where: ParkWhereUniqueInput
    create: XOR<ParkCreateWithoutSeasonalInfoInput, ParkUncheckedCreateWithoutSeasonalInfoInput>
  }

  export type ParkUpsertWithoutSeasonalInfoInput = {
    update: XOR<ParkUpdateWithoutSeasonalInfoInput, ParkUncheckedUpdateWithoutSeasonalInfoInput>
    create: XOR<ParkCreateWithoutSeasonalInfoInput, ParkUncheckedCreateWithoutSeasonalInfoInput>
    where?: ParkWhereInput
  }

  export type ParkUpdateToOneWithWhereWithoutSeasonalInfoInput = {
    where?: ParkWhereInput
    data: XOR<ParkUpdateWithoutSeasonalInfoInput, ParkUncheckedUpdateWithoutSeasonalInfoInput>
  }

  export type ParkUpdateWithoutSeasonalInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneWithoutParkNestedInput
    hours?: HoursUpdateOneWithoutParkNestedInput
    contact?: ContactUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUpdateOneWithoutParkNestedInput
    parking?: ParkingUpdateOneWithoutParkNestedInput
  }

  export type ParkUncheckedUpdateWithoutSeasonalInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ParkUpdateactivitiesInput | number[]
    facilities?: ParkUpdatefacilitiesInput | string[]
    rules?: ParkUpdaterulesInput | string[]
    isDogFriendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAccessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image_from_listing?: NullableStringFieldUpdateOperationsInput | string | null
    downloaded_image_path?: NullableStringFieldUpdateOperationsInput | string | null
    info_url?: NullableStringFieldUpdateOperationsInput | string | null
    recreation_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUncheckedUpdateOneWithoutParkNestedInput
    hours?: HoursUncheckedUpdateOneWithoutParkNestedInput
    contact?: ContactUncheckedUpdateOneWithoutParkNestedInput
    entranceFee?: EntranceFeeUncheckedUpdateOneWithoutParkNestedInput
    parking?: ParkingUncheckedUpdateOneWithoutParkNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}