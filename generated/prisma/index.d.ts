
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
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model ExerciseRecord
 * 
 */
export type ExerciseRecord = $Result.DefaultSelection<Prisma.$ExerciseRecordPayload>
/**
 * Model ParticipantPhoto
 * 
 */
export type ParticipantPhoto = $Result.DefaultSelection<Prisma.$ParticipantPhotoPayload>
/**
 * Model GroupPhoto
 * 
 */
export type GroupPhoto = $Result.DefaultSelection<Prisma.$GroupPhotoPayload>
/**
 * Model GroupBadge
 * 
 */
export type GroupBadge = $Result.DefaultSelection<Prisma.$GroupBadgePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ExerciseType: {
  running: 'running',
  cycling: 'cycling',
  swimming: 'swimming'
};

export type ExerciseType = (typeof ExerciseType)[keyof typeof ExerciseType]

}

export type ExerciseType = $Enums.ExerciseType

export const ExerciseType: typeof $Enums.ExerciseType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Groups
 * const groups = await prisma.group.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Groups
   * const groups = await prisma.group.findMany()
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
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseRecord`: Exposes CRUD operations for the **ExerciseRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseRecords
    * const exerciseRecords = await prisma.exerciseRecord.findMany()
    * ```
    */
  get exerciseRecord(): Prisma.ExerciseRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantPhoto`: Exposes CRUD operations for the **ParticipantPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantPhotos
    * const participantPhotos = await prisma.participantPhoto.findMany()
    * ```
    */
  get participantPhoto(): Prisma.ParticipantPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupPhoto`: Exposes CRUD operations for the **GroupPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupPhotos
    * const groupPhotos = await prisma.groupPhoto.findMany()
    * ```
    */
  get groupPhoto(): Prisma.GroupPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupBadge`: Exposes CRUD operations for the **GroupBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupBadges
    * const groupBadges = await prisma.groupBadge.findMany()
    * ```
    */
  get groupBadge(): Prisma.GroupBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Group: 'Group',
    Participant: 'Participant',
    Like: 'Like',
    ExerciseRecord: 'ExerciseRecord',
    ParticipantPhoto: 'ParticipantPhoto',
    GroupPhoto: 'GroupPhoto',
    GroupBadge: 'GroupBadge',
    Tag: 'Tag'
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
      modelProps: "group" | "participant" | "like" | "exerciseRecord" | "participantPhoto" | "groupPhoto" | "groupBadge" | "tag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      ExerciseRecord: {
        payload: Prisma.$ExerciseRecordPayload<ExtArgs>
        fields: Prisma.ExerciseRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          findFirst: {
            args: Prisma.ExerciseRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          findMany: {
            args: Prisma.ExerciseRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          create: {
            args: Prisma.ExerciseRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          createMany: {
            args: Prisma.ExerciseRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          delete: {
            args: Prisma.ExerciseRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          update: {
            args: Prisma.ExerciseRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          aggregate: {
            args: Prisma.ExerciseRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseRecord>
          }
          groupBy: {
            args: Prisma.ExerciseRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseRecordCountAggregateOutputType> | number
          }
        }
      }
      ParticipantPhoto: {
        payload: Prisma.$ParticipantPhotoPayload<ExtArgs>
        fields: Prisma.ParticipantPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>
          }
          findFirst: {
            args: Prisma.ParticipantPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>
          }
          findMany: {
            args: Prisma.ParticipantPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>[]
          }
          create: {
            args: Prisma.ParticipantPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>
          }
          createMany: {
            args: Prisma.ParticipantPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>[]
          }
          delete: {
            args: Prisma.ParticipantPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>
          }
          update: {
            args: Prisma.ParticipantPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPhotoPayload>
          }
          aggregate: {
            args: Prisma.ParticipantPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantPhoto>
          }
          groupBy: {
            args: Prisma.ParticipantPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantPhotoCountAggregateOutputType> | number
          }
        }
      }
      GroupPhoto: {
        payload: Prisma.$GroupPhotoPayload<ExtArgs>
        fields: Prisma.GroupPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>
          }
          findFirst: {
            args: Prisma.GroupPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>
          }
          findMany: {
            args: Prisma.GroupPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>[]
          }
          create: {
            args: Prisma.GroupPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>
          }
          createMany: {
            args: Prisma.GroupPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>[]
          }
          delete: {
            args: Prisma.GroupPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>
          }
          update: {
            args: Prisma.GroupPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>
          }
          deleteMany: {
            args: Prisma.GroupPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>[]
          }
          upsert: {
            args: Prisma.GroupPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPhotoPayload>
          }
          aggregate: {
            args: Prisma.GroupPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupPhoto>
          }
          groupBy: {
            args: Prisma.GroupPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<GroupPhotoCountAggregateOutputType> | number
          }
        }
      }
      GroupBadge: {
        payload: Prisma.$GroupBadgePayload<ExtArgs>
        fields: Prisma.GroupBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>
          }
          findFirst: {
            args: Prisma.GroupBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>
          }
          findMany: {
            args: Prisma.GroupBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>[]
          }
          create: {
            args: Prisma.GroupBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>
          }
          createMany: {
            args: Prisma.GroupBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>[]
          }
          delete: {
            args: Prisma.GroupBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>
          }
          update: {
            args: Prisma.GroupBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>
          }
          deleteMany: {
            args: Prisma.GroupBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>[]
          }
          upsert: {
            args: Prisma.GroupBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupBadgePayload>
          }
          aggregate: {
            args: Prisma.GroupBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupBadge>
          }
          groupBy: {
            args: Prisma.GroupBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<GroupBadgeCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    group?: GroupOmit
    participant?: ParticipantOmit
    like?: LikeOmit
    exerciseRecord?: ExerciseRecordOmit
    participantPhoto?: ParticipantPhotoOmit
    groupPhoto?: GroupPhotoOmit
    groupBadge?: GroupBadgeOmit
    tag?: TagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    tag: number
    participant: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | GroupCountOutputTypeCountTagArgs
    participant?: boolean | GroupCountOutputTypeCountParticipantArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    exerciseRecords: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecords?: boolean | ParticipantCountOutputTypeCountExerciseRecordsArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountExerciseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseRecordWhereInput
  }


  /**
   * Count Type ExerciseRecordCountOutputType
   */

  export type ExerciseRecordCountOutputType = {
    participantPhoto: number
  }

  export type ExerciseRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantPhoto?: boolean | ExerciseRecordCountOutputTypeCountParticipantPhotoArgs
  }

  // Custom InputTypes
  /**
   * ExerciseRecordCountOutputType without action
   */
  export type ExerciseRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecordCountOutputType
     */
    select?: ExerciseRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseRecordCountOutputType without action
   */
  export type ExerciseRecordCountOutputTypeCountParticipantPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantPhotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    goalRep: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    goalRep: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    groupName: string | null
    description: string | null
    goalRep: number | null
    discordWebHookURl: string | null
    discordInviteUrl: string | null
    ownerNickname: string | null
    ownerPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    groupName: string | null
    description: string | null
    goalRep: number | null
    discordWebHookURl: string | null
    discordInviteUrl: string | null
    ownerNickname: string | null
    ownerPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    groupName: number
    description: number
    goalRep: number
    discordWebHookURl: number
    discordInviteUrl: number
    ownerNickname: number
    ownerPassword: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    goalRep?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    goalRep?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    groupName?: true
    description?: true
    goalRep?: true
    discordWebHookURl?: true
    discordInviteUrl?: true
    ownerNickname?: true
    ownerPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    groupName?: true
    description?: true
    goalRep?: true
    discordWebHookURl?: true
    discordInviteUrl?: true
    ownerNickname?: true
    ownerPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    groupName?: true
    description?: true
    goalRep?: true
    discordWebHookURl?: true
    discordInviteUrl?: true
    ownerNickname?: true
    ownerPassword?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    groupName: string
    description: string | null
    goalRep: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    description?: boolean
    goalRep?: boolean
    discordWebHookURl?: boolean
    discordInviteUrl?: boolean
    ownerNickname?: boolean
    ownerPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupPhoto?: boolean | Group$groupPhotoArgs<ExtArgs>
    groupBadge?: boolean | Group$groupBadgeArgs<ExtArgs>
    tag?: boolean | Group$tagArgs<ExtArgs>
    participant?: boolean | Group$participantArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    description?: boolean
    goalRep?: boolean
    discordWebHookURl?: boolean
    discordInviteUrl?: boolean
    ownerNickname?: boolean
    ownerPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupName?: boolean
    description?: boolean
    goalRep?: boolean
    discordWebHookURl?: boolean
    discordInviteUrl?: boolean
    ownerNickname?: boolean
    ownerPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    groupName?: boolean
    description?: boolean
    goalRep?: boolean
    discordWebHookURl?: boolean
    discordInviteUrl?: boolean
    ownerNickname?: boolean
    ownerPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupName" | "description" | "goalRep" | "discordWebHookURl" | "discordInviteUrl" | "ownerNickname" | "ownerPassword" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupPhoto?: boolean | Group$groupPhotoArgs<ExtArgs>
    groupBadge?: boolean | Group$groupBadgeArgs<ExtArgs>
    tag?: boolean | Group$tagArgs<ExtArgs>
    participant?: boolean | Group$participantArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      groupPhoto: Prisma.$GroupPhotoPayload<ExtArgs> | null
      groupBadge: Prisma.$GroupBadgePayload<ExtArgs> | null
      tag: Prisma.$TagPayload<ExtArgs>[]
      participant: Prisma.$ParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupName: string
      description: string | null
      goalRep: number
      discordWebHookURl: string
      discordInviteUrl: string
      ownerNickname: string
      ownerPassword: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupPhoto<T extends Group$groupPhotoArgs<ExtArgs> = {}>(args?: Subset<T, Group$groupPhotoArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    groupBadge<T extends Group$groupBadgeArgs<ExtArgs> = {}>(args?: Subset<T, Group$groupBadgeArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tag<T extends Group$tagArgs<ExtArgs> = {}>(args?: Subset<T, Group$tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participant<T extends Group$participantArgs<ExtArgs> = {}>(args?: Subset<T, Group$participantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly groupName: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly goalRep: FieldRef<"Group", 'Int'>
    readonly discordWebHookURl: FieldRef<"Group", 'String'>
    readonly discordInviteUrl: FieldRef<"Group", 'String'>
    readonly ownerNickname: FieldRef<"Group", 'String'>
    readonly ownerPassword: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.groupPhoto
   */
  export type Group$groupPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    where?: GroupPhotoWhereInput
  }

  /**
   * Group.groupBadge
   */
  export type Group$groupBadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    where?: GroupBadgeWhereInput
  }

  /**
   * Group.tag
   */
  export type Group$tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Group.participant
   */
  export type Group$participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _avg: ParticipantAvgAggregateOutputType | null
    _sum: ParticipantSumAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
    recordCount: number | null
    recordTime: number | null
  }

  export type ParticipantSumAggregateOutputType = {
    id: number | null
    groupId: number | null
    recordCount: number | null
    recordTime: number | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    nickname: string | null
    password: string | null
    recordCount: number | null
    recordTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    nickname: string | null
    password: string | null
    recordCount: number | null
    recordTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    groupId: number
    nickname: number
    password: number
    recordCount: number
    recordTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipantAvgAggregateInputType = {
    id?: true
    groupId?: true
    recordCount?: true
    recordTime?: true
  }

  export type ParticipantSumAggregateInputType = {
    id?: true
    groupId?: true
    recordCount?: true
    recordTime?: true
  }

  export type ParticipantMinAggregateInputType = {
    id?: true
    groupId?: true
    nickname?: true
    password?: true
    recordCount?: true
    recordTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    groupId?: true
    nickname?: true
    password?: true
    recordCount?: true
    recordTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    groupId?: true
    nickname?: true
    password?: true
    recordCount?: true
    recordTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _avg?: ParticipantAvgAggregateInputType
    _sum?: ParticipantSumAggregateInputType
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: number
    groupId: number
    nickname: string
    password: string
    recordCount: number
    recordTime: number
    createdAt: Date
    updatedAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _avg: ParticipantAvgAggregateOutputType | null
    _sum: ParticipantSumAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    nickname?: boolean
    password?: boolean
    recordCount?: boolean
    recordTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    likeId?: boolean | Participant$likeIdArgs<ExtArgs>
    exerciseRecords?: boolean | Participant$exerciseRecordsArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    nickname?: boolean
    password?: boolean
    recordCount?: boolean
    recordTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    nickname?: boolean
    password?: boolean
    recordCount?: boolean
    recordTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    groupId?: boolean
    nickname?: boolean
    password?: boolean
    recordCount?: boolean
    recordTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "nickname" | "password" | "recordCount" | "recordTime" | "createdAt" | "updatedAt", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    likeId?: boolean | Participant$likeIdArgs<ExtArgs>
    exerciseRecords?: boolean | Participant$exerciseRecordsArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      likeId: Prisma.$LikePayload<ExtArgs> | null
      exerciseRecords: Prisma.$ExerciseRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      nickname: string
      password: string
      recordCount: number
      recordTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likeId<T extends Participant$likeIdArgs<ExtArgs> = {}>(args?: Subset<T, Participant$likeIdArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    exerciseRecords<T extends Participant$exerciseRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$exerciseRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'Int'>
    readonly groupId: FieldRef<"Participant", 'Int'>
    readonly nickname: FieldRef<"Participant", 'String'>
    readonly password: FieldRef<"Participant", 'String'>
    readonly recordCount: FieldRef<"Participant", 'Int'>
    readonly recordTime: FieldRef<"Participant", 'Int'>
    readonly createdAt: FieldRef<"Participant", 'DateTime'>
    readonly updatedAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.likeId
   */
  export type Participant$likeIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
  }

  /**
   * Participant.exerciseRecords
   */
  export type Participant$exerciseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    where?: ExerciseRecordWhereInput
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    cursor?: ExerciseRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    participantId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    participantId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    participantId: number | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    participantId: number | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    participantId: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    participantId?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    participantId?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    participantId?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    participantId?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    participantId?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: number
    participantId: number
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    participantId?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participantId: number
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'Int'>
    readonly participantId: FieldRef<"Like", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseRecord
   */

  export type AggregateExerciseRecord = {
    _count: ExerciseRecordCountAggregateOutputType | null
    _avg: ExerciseRecordAvgAggregateOutputType | null
    _sum: ExerciseRecordSumAggregateOutputType | null
    _min: ExerciseRecordMinAggregateOutputType | null
    _max: ExerciseRecordMaxAggregateOutputType | null
  }

  export type ExerciseRecordAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
    time: number | null
    distance: number | null
    participantId: number | null
  }

  export type ExerciseRecordSumAggregateOutputType = {
    id: number | null
    groupId: number | null
    time: number | null
    distance: number | null
    participantId: number | null
  }

  export type ExerciseRecordMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    exerciseType: $Enums.ExerciseType | null
    description: string | null
    time: number | null
    distance: number | null
    participantId: number | null
  }

  export type ExerciseRecordMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    exerciseType: $Enums.ExerciseType | null
    description: string | null
    time: number | null
    distance: number | null
    participantId: number | null
  }

  export type ExerciseRecordCountAggregateOutputType = {
    id: number
    groupId: number
    exerciseType: number
    description: number
    time: number
    distance: number
    participantId: number
    _all: number
  }


  export type ExerciseRecordAvgAggregateInputType = {
    id?: true
    groupId?: true
    time?: true
    distance?: true
    participantId?: true
  }

  export type ExerciseRecordSumAggregateInputType = {
    id?: true
    groupId?: true
    time?: true
    distance?: true
    participantId?: true
  }

  export type ExerciseRecordMinAggregateInputType = {
    id?: true
    groupId?: true
    exerciseType?: true
    description?: true
    time?: true
    distance?: true
    participantId?: true
  }

  export type ExerciseRecordMaxAggregateInputType = {
    id?: true
    groupId?: true
    exerciseType?: true
    description?: true
    time?: true
    distance?: true
    participantId?: true
  }

  export type ExerciseRecordCountAggregateInputType = {
    id?: true
    groupId?: true
    exerciseType?: true
    description?: true
    time?: true
    distance?: true
    participantId?: true
    _all?: true
  }

  export type ExerciseRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseRecord to aggregate.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseRecords
    **/
    _count?: true | ExerciseRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseRecordMaxAggregateInputType
  }

  export type GetExerciseRecordAggregateType<T extends ExerciseRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseRecord[P]>
      : GetScalarType<T[P], AggregateExerciseRecord[P]>
  }




  export type ExerciseRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseRecordWhereInput
    orderBy?: ExerciseRecordOrderByWithAggregationInput | ExerciseRecordOrderByWithAggregationInput[]
    by: ExerciseRecordScalarFieldEnum[] | ExerciseRecordScalarFieldEnum
    having?: ExerciseRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseRecordCountAggregateInputType | true
    _avg?: ExerciseRecordAvgAggregateInputType
    _sum?: ExerciseRecordSumAggregateInputType
    _min?: ExerciseRecordMinAggregateInputType
    _max?: ExerciseRecordMaxAggregateInputType
  }

  export type ExerciseRecordGroupByOutputType = {
    id: number
    groupId: number
    exerciseType: $Enums.ExerciseType
    description: string
    time: number
    distance: number
    participantId: number
    _count: ExerciseRecordCountAggregateOutputType | null
    _avg: ExerciseRecordAvgAggregateOutputType | null
    _sum: ExerciseRecordSumAggregateOutputType | null
    _min: ExerciseRecordMinAggregateOutputType | null
    _max: ExerciseRecordMaxAggregateOutputType | null
  }

  type GetExerciseRecordGroupByPayload<T extends ExerciseRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseRecordGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    exerciseType?: boolean
    description?: boolean
    time?: boolean
    distance?: boolean
    participantId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    participantPhoto?: boolean | ExerciseRecord$participantPhotoArgs<ExtArgs>
    _count?: boolean | ExerciseRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    exerciseType?: boolean
    description?: boolean
    time?: boolean
    distance?: boolean
    participantId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    exerciseType?: boolean
    description?: boolean
    time?: boolean
    distance?: boolean
    participantId?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectScalar = {
    id?: boolean
    groupId?: boolean
    exerciseType?: boolean
    description?: boolean
    time?: boolean
    distance?: boolean
    participantId?: boolean
  }

  export type ExerciseRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "exerciseType" | "description" | "time" | "distance" | "participantId", ExtArgs["result"]["exerciseRecord"]>
  export type ExerciseRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    participantPhoto?: boolean | ExerciseRecord$participantPhotoArgs<ExtArgs>
    _count?: boolean | ExerciseRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ExerciseRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $ExerciseRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseRecord"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
      participantPhoto: Prisma.$ParticipantPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      exerciseType: $Enums.ExerciseType
      description: string
      time: number
      distance: number
      participantId: number
    }, ExtArgs["result"]["exerciseRecord"]>
    composites: {}
  }

  type ExerciseRecordGetPayload<S extends boolean | null | undefined | ExerciseRecordDefaultArgs> = $Result.GetResult<Prisma.$ExerciseRecordPayload, S>

  type ExerciseRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseRecordCountAggregateInputType | true
    }

  export interface ExerciseRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseRecord'], meta: { name: 'ExerciseRecord' } }
    /**
     * Find zero or one ExerciseRecord that matches the filter.
     * @param {ExerciseRecordFindUniqueArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseRecordFindUniqueArgs>(args: SelectSubset<T, ExerciseRecordFindUniqueArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseRecordFindUniqueOrThrowArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindFirstArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseRecordFindFirstArgs>(args?: SelectSubset<T, ExerciseRecordFindFirstArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindFirstOrThrowArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseRecords
     * const exerciseRecords = await prisma.exerciseRecord.findMany()
     * 
     * // Get first 10 ExerciseRecords
     * const exerciseRecords = await prisma.exerciseRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseRecordFindManyArgs>(args?: SelectSubset<T, ExerciseRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseRecord.
     * @param {ExerciseRecordCreateArgs} args - Arguments to create a ExerciseRecord.
     * @example
     * // Create one ExerciseRecord
     * const ExerciseRecord = await prisma.exerciseRecord.create({
     *   data: {
     *     // ... data to create a ExerciseRecord
     *   }
     * })
     * 
     */
    create<T extends ExerciseRecordCreateArgs>(args: SelectSubset<T, ExerciseRecordCreateArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseRecords.
     * @param {ExerciseRecordCreateManyArgs} args - Arguments to create many ExerciseRecords.
     * @example
     * // Create many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseRecordCreateManyArgs>(args?: SelectSubset<T, ExerciseRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseRecords and returns the data saved in the database.
     * @param {ExerciseRecordCreateManyAndReturnArgs} args - Arguments to create many ExerciseRecords.
     * @example
     * // Create many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseRecords and only return the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseRecord.
     * @param {ExerciseRecordDeleteArgs} args - Arguments to delete one ExerciseRecord.
     * @example
     * // Delete one ExerciseRecord
     * const ExerciseRecord = await prisma.exerciseRecord.delete({
     *   where: {
     *     // ... filter to delete one ExerciseRecord
     *   }
     * })
     * 
     */
    delete<T extends ExerciseRecordDeleteArgs>(args: SelectSubset<T, ExerciseRecordDeleteArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseRecord.
     * @param {ExerciseRecordUpdateArgs} args - Arguments to update one ExerciseRecord.
     * @example
     * // Update one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseRecordUpdateArgs>(args: SelectSubset<T, ExerciseRecordUpdateArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseRecords.
     * @param {ExerciseRecordDeleteManyArgs} args - Arguments to filter ExerciseRecords to delete.
     * @example
     * // Delete a few ExerciseRecords
     * const { count } = await prisma.exerciseRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseRecordDeleteManyArgs>(args?: SelectSubset<T, ExerciseRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseRecordUpdateManyArgs>(args: SelectSubset<T, ExerciseRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseRecords and returns the data updated in the database.
     * @param {ExerciseRecordUpdateManyAndReturnArgs} args - Arguments to update many ExerciseRecords.
     * @example
     * // Update many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseRecords and only return the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseRecord.
     * @param {ExerciseRecordUpsertArgs} args - Arguments to update or create a ExerciseRecord.
     * @example
     * // Update or create a ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.upsert({
     *   create: {
     *     // ... data to create a ExerciseRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseRecord we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseRecordUpsertArgs>(args: SelectSubset<T, ExerciseRecordUpsertArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordCountArgs} args - Arguments to filter ExerciseRecords to count.
     * @example
     * // Count the number of ExerciseRecords
     * const count = await prisma.exerciseRecord.count({
     *   where: {
     *     // ... the filter for the ExerciseRecords we want to count
     *   }
     * })
    **/
    count<T extends ExerciseRecordCountArgs>(
      args?: Subset<T, ExerciseRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseRecordAggregateArgs>(args: Subset<T, ExerciseRecordAggregateArgs>): Prisma.PrismaPromise<GetExerciseRecordAggregateType<T>>

    /**
     * Group by ExerciseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordGroupByArgs} args - Group by arguments.
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
      T extends ExerciseRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseRecordGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseRecord model
   */
  readonly fields: ExerciseRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participantPhoto<T extends ExerciseRecord$participantPhotoArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseRecord$participantPhotoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExerciseRecord model
   */
  interface ExerciseRecordFieldRefs {
    readonly id: FieldRef<"ExerciseRecord", 'Int'>
    readonly groupId: FieldRef<"ExerciseRecord", 'Int'>
    readonly exerciseType: FieldRef<"ExerciseRecord", 'ExerciseType'>
    readonly description: FieldRef<"ExerciseRecord", 'String'>
    readonly time: FieldRef<"ExerciseRecord", 'Int'>
    readonly distance: FieldRef<"ExerciseRecord", 'Int'>
    readonly participantId: FieldRef<"ExerciseRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseRecord findUnique
   */
  export type ExerciseRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord findUniqueOrThrow
   */
  export type ExerciseRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord findFirst
   */
  export type ExerciseRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseRecords.
     */
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord findFirstOrThrow
   */
  export type ExerciseRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseRecords.
     */
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord findMany
   */
  export type ExerciseRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecords to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord create
   */
  export type ExerciseRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseRecord.
     */
    data: XOR<ExerciseRecordCreateInput, ExerciseRecordUncheckedCreateInput>
  }

  /**
   * ExerciseRecord createMany
   */
  export type ExerciseRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseRecords.
     */
    data: ExerciseRecordCreateManyInput | ExerciseRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseRecord createManyAndReturn
   */
  export type ExerciseRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseRecords.
     */
    data: ExerciseRecordCreateManyInput | ExerciseRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseRecord update
   */
  export type ExerciseRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseRecord.
     */
    data: XOR<ExerciseRecordUpdateInput, ExerciseRecordUncheckedUpdateInput>
    /**
     * Choose, which ExerciseRecord to update.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord updateMany
   */
  export type ExerciseRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseRecords.
     */
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseRecords to update
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to update.
     */
    limit?: number
  }

  /**
   * ExerciseRecord updateManyAndReturn
   */
  export type ExerciseRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseRecords.
     */
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseRecords to update
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseRecord upsert
   */
  export type ExerciseRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseRecord to update in case it exists.
     */
    where: ExerciseRecordWhereUniqueInput
    /**
     * In case the ExerciseRecord found by the `where` argument doesn't exist, create a new ExerciseRecord with this data.
     */
    create: XOR<ExerciseRecordCreateInput, ExerciseRecordUncheckedCreateInput>
    /**
     * In case the ExerciseRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseRecordUpdateInput, ExerciseRecordUncheckedUpdateInput>
  }

  /**
   * ExerciseRecord delete
   */
  export type ExerciseRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter which ExerciseRecord to delete.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord deleteMany
   */
  export type ExerciseRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseRecords to delete
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to delete.
     */
    limit?: number
  }

  /**
   * ExerciseRecord.participantPhoto
   */
  export type ExerciseRecord$participantPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    where?: ParticipantPhotoWhereInput
    orderBy?: ParticipantPhotoOrderByWithRelationInput | ParticipantPhotoOrderByWithRelationInput[]
    cursor?: ParticipantPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantPhotoScalarFieldEnum | ParticipantPhotoScalarFieldEnum[]
  }

  /**
   * ExerciseRecord without action
   */
  export type ExerciseRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantPhoto
   */

  export type AggregateParticipantPhoto = {
    _count: ParticipantPhotoCountAggregateOutputType | null
    _avg: ParticipantPhotoAvgAggregateOutputType | null
    _sum: ParticipantPhotoSumAggregateOutputType | null
    _min: ParticipantPhotoMinAggregateOutputType | null
    _max: ParticipantPhotoMaxAggregateOutputType | null
  }

  export type ParticipantPhotoAvgAggregateOutputType = {
    id: number | null
    exerciseRecordId: number | null
  }

  export type ParticipantPhotoSumAggregateOutputType = {
    id: number | null
    exerciseRecordId: number | null
  }

  export type ParticipantPhotoMinAggregateOutputType = {
    id: number | null
    exerciseRecordId: number | null
    photoUrl: string | null
  }

  export type ParticipantPhotoMaxAggregateOutputType = {
    id: number | null
    exerciseRecordId: number | null
    photoUrl: string | null
  }

  export type ParticipantPhotoCountAggregateOutputType = {
    id: number
    exerciseRecordId: number
    photoUrl: number
    _all: number
  }


  export type ParticipantPhotoAvgAggregateInputType = {
    id?: true
    exerciseRecordId?: true
  }

  export type ParticipantPhotoSumAggregateInputType = {
    id?: true
    exerciseRecordId?: true
  }

  export type ParticipantPhotoMinAggregateInputType = {
    id?: true
    exerciseRecordId?: true
    photoUrl?: true
  }

  export type ParticipantPhotoMaxAggregateInputType = {
    id?: true
    exerciseRecordId?: true
    photoUrl?: true
  }

  export type ParticipantPhotoCountAggregateInputType = {
    id?: true
    exerciseRecordId?: true
    photoUrl?: true
    _all?: true
  }

  export type ParticipantPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantPhoto to aggregate.
     */
    where?: ParticipantPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantPhotos to fetch.
     */
    orderBy?: ParticipantPhotoOrderByWithRelationInput | ParticipantPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantPhotos
    **/
    _count?: true | ParticipantPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantPhotoMaxAggregateInputType
  }

  export type GetParticipantPhotoAggregateType<T extends ParticipantPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantPhoto[P]>
      : GetScalarType<T[P], AggregateParticipantPhoto[P]>
  }




  export type ParticipantPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantPhotoWhereInput
    orderBy?: ParticipantPhotoOrderByWithAggregationInput | ParticipantPhotoOrderByWithAggregationInput[]
    by: ParticipantPhotoScalarFieldEnum[] | ParticipantPhotoScalarFieldEnum
    having?: ParticipantPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantPhotoCountAggregateInputType | true
    _avg?: ParticipantPhotoAvgAggregateInputType
    _sum?: ParticipantPhotoSumAggregateInputType
    _min?: ParticipantPhotoMinAggregateInputType
    _max?: ParticipantPhotoMaxAggregateInputType
  }

  export type ParticipantPhotoGroupByOutputType = {
    id: number
    exerciseRecordId: number
    photoUrl: string
    _count: ParticipantPhotoCountAggregateOutputType | null
    _avg: ParticipantPhotoAvgAggregateOutputType | null
    _sum: ParticipantPhotoSumAggregateOutputType | null
    _min: ParticipantPhotoMinAggregateOutputType | null
    _max: ParticipantPhotoMaxAggregateOutputType | null
  }

  type GetParticipantPhotoGroupByPayload<T extends ParticipantPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantPhotoGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseRecordId?: boolean
    photoUrl?: boolean
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantPhoto"]>

  export type ParticipantPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseRecordId?: boolean
    photoUrl?: boolean
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantPhoto"]>

  export type ParticipantPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseRecordId?: boolean
    photoUrl?: boolean
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantPhoto"]>

  export type ParticipantPhotoSelectScalar = {
    id?: boolean
    exerciseRecordId?: boolean
    photoUrl?: boolean
  }

  export type ParticipantPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseRecordId" | "photoUrl", ExtArgs["result"]["participantPhoto"]>
  export type ParticipantPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }
  export type ParticipantPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }
  export type ParticipantPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }

  export type $ParticipantPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantPhoto"
    objects: {
      exerciseRecord: Prisma.$ExerciseRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      exerciseRecordId: number
      photoUrl: string
    }, ExtArgs["result"]["participantPhoto"]>
    composites: {}
  }

  type ParticipantPhotoGetPayload<S extends boolean | null | undefined | ParticipantPhotoDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPhotoPayload, S>

  type ParticipantPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantPhotoCountAggregateInputType | true
    }

  export interface ParticipantPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantPhoto'], meta: { name: 'ParticipantPhoto' } }
    /**
     * Find zero or one ParticipantPhoto that matches the filter.
     * @param {ParticipantPhotoFindUniqueArgs} args - Arguments to find a ParticipantPhoto
     * @example
     * // Get one ParticipantPhoto
     * const participantPhoto = await prisma.participantPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantPhotoFindUniqueArgs>(args: SelectSubset<T, ParticipantPhotoFindUniqueArgs<ExtArgs>>): Prisma__ParticipantPhotoClient<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantPhotoFindUniqueOrThrowArgs} args - Arguments to find a ParticipantPhoto
     * @example
     * // Get one ParticipantPhoto
     * const participantPhoto = await prisma.participantPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantPhotoClient<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantPhotoFindFirstArgs} args - Arguments to find a ParticipantPhoto
     * @example
     * // Get one ParticipantPhoto
     * const participantPhoto = await prisma.participantPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantPhotoFindFirstArgs>(args?: SelectSubset<T, ParticipantPhotoFindFirstArgs<ExtArgs>>): Prisma__ParticipantPhotoClient<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantPhotoFindFirstOrThrowArgs} args - Arguments to find a ParticipantPhoto
     * @example
     * // Get one ParticipantPhoto
     * const participantPhoto = await prisma.participantPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantPhotoClient<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantPhotos
     * const participantPhotos = await prisma.participantPhoto.findMany()
     * 
     * // Get first 10 ParticipantPhotos
     * const participantPhotos = await prisma.participantPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantPhotoWithIdOnly = await prisma.participantPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantPhotoFindManyArgs>(args?: SelectSubset<T, ParticipantPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantPhoto.
     * @param {ParticipantPhotoCreateArgs} args - Arguments to create a ParticipantPhoto.
     * @example
     * // Create one ParticipantPhoto
     * const ParticipantPhoto = await prisma.participantPhoto.create({
     *   data: {
     *     // ... data to create a ParticipantPhoto
     *   }
     * })
     * 
     */
    create<T extends ParticipantPhotoCreateArgs>(args: SelectSubset<T, ParticipantPhotoCreateArgs<ExtArgs>>): Prisma__ParticipantPhotoClient<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantPhotos.
     * @param {ParticipantPhotoCreateManyArgs} args - Arguments to create many ParticipantPhotos.
     * @example
     * // Create many ParticipantPhotos
     * const participantPhoto = await prisma.participantPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantPhotoCreateManyArgs>(args?: SelectSubset<T, ParticipantPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantPhotos and returns the data saved in the database.
     * @param {ParticipantPhotoCreateManyAndReturnArgs} args - Arguments to create many ParticipantPhotos.
     * @example
     * // Create many ParticipantPhotos
     * const participantPhoto = await prisma.participantPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantPhotos and only return the `id`
     * const participantPhotoWithIdOnly = await prisma.participantPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantPhoto.
     * @param {ParticipantPhotoDeleteArgs} args - Arguments to delete one ParticipantPhoto.
     * @example
     * // Delete one ParticipantPhoto
     * const ParticipantPhoto = await prisma.participantPhoto.delete({
     *   where: {
     *     // ... filter to delete one ParticipantPhoto
     *   }
     * })
     * 
     */
    delete<T extends ParticipantPhotoDeleteArgs>(args: SelectSubset<T, ParticipantPhotoDeleteArgs<ExtArgs>>): Prisma__ParticipantPhotoClient<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantPhoto.
     * @param {ParticipantPhotoUpdateArgs} args - Arguments to update one ParticipantPhoto.
     * @example
     * // Update one ParticipantPhoto
     * const participantPhoto = await prisma.participantPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantPhotoUpdateArgs>(args: SelectSubset<T, ParticipantPhotoUpdateArgs<ExtArgs>>): Prisma__ParticipantPhotoClient<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantPhotos.
     * @param {ParticipantPhotoDeleteManyArgs} args - Arguments to filter ParticipantPhotos to delete.
     * @example
     * // Delete a few ParticipantPhotos
     * const { count } = await prisma.participantPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantPhotoDeleteManyArgs>(args?: SelectSubset<T, ParticipantPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantPhotos
     * const participantPhoto = await prisma.participantPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantPhotoUpdateManyArgs>(args: SelectSubset<T, ParticipantPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantPhotos and returns the data updated in the database.
     * @param {ParticipantPhotoUpdateManyAndReturnArgs} args - Arguments to update many ParticipantPhotos.
     * @example
     * // Update many ParticipantPhotos
     * const participantPhoto = await prisma.participantPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantPhotos and only return the `id`
     * const participantPhotoWithIdOnly = await prisma.participantPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantPhoto.
     * @param {ParticipantPhotoUpsertArgs} args - Arguments to update or create a ParticipantPhoto.
     * @example
     * // Update or create a ParticipantPhoto
     * const participantPhoto = await prisma.participantPhoto.upsert({
     *   create: {
     *     // ... data to create a ParticipantPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantPhoto we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantPhotoUpsertArgs>(args: SelectSubset<T, ParticipantPhotoUpsertArgs<ExtArgs>>): Prisma__ParticipantPhotoClient<$Result.GetResult<Prisma.$ParticipantPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantPhotoCountArgs} args - Arguments to filter ParticipantPhotos to count.
     * @example
     * // Count the number of ParticipantPhotos
     * const count = await prisma.participantPhoto.count({
     *   where: {
     *     // ... the filter for the ParticipantPhotos we want to count
     *   }
     * })
    **/
    count<T extends ParticipantPhotoCountArgs>(
      args?: Subset<T, ParticipantPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantPhotoAggregateArgs>(args: Subset<T, ParticipantPhotoAggregateArgs>): Prisma.PrismaPromise<GetParticipantPhotoAggregateType<T>>

    /**
     * Group by ParticipantPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantPhotoGroupByArgs} args - Group by arguments.
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
      T extends ParticipantPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantPhotoGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantPhoto model
   */
  readonly fields: ParticipantPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exerciseRecord<T extends ExerciseRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseRecordDefaultArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParticipantPhoto model
   */
  interface ParticipantPhotoFieldRefs {
    readonly id: FieldRef<"ParticipantPhoto", 'Int'>
    readonly exerciseRecordId: FieldRef<"ParticipantPhoto", 'Int'>
    readonly photoUrl: FieldRef<"ParticipantPhoto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantPhoto findUnique
   */
  export type ParticipantPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantPhoto to fetch.
     */
    where: ParticipantPhotoWhereUniqueInput
  }

  /**
   * ParticipantPhoto findUniqueOrThrow
   */
  export type ParticipantPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantPhoto to fetch.
     */
    where: ParticipantPhotoWhereUniqueInput
  }

  /**
   * ParticipantPhoto findFirst
   */
  export type ParticipantPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantPhoto to fetch.
     */
    where?: ParticipantPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantPhotos to fetch.
     */
    orderBy?: ParticipantPhotoOrderByWithRelationInput | ParticipantPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantPhotos.
     */
    cursor?: ParticipantPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantPhotos.
     */
    distinct?: ParticipantPhotoScalarFieldEnum | ParticipantPhotoScalarFieldEnum[]
  }

  /**
   * ParticipantPhoto findFirstOrThrow
   */
  export type ParticipantPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantPhoto to fetch.
     */
    where?: ParticipantPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantPhotos to fetch.
     */
    orderBy?: ParticipantPhotoOrderByWithRelationInput | ParticipantPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantPhotos.
     */
    cursor?: ParticipantPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantPhotos.
     */
    distinct?: ParticipantPhotoScalarFieldEnum | ParticipantPhotoScalarFieldEnum[]
  }

  /**
   * ParticipantPhoto findMany
   */
  export type ParticipantPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantPhotos to fetch.
     */
    where?: ParticipantPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantPhotos to fetch.
     */
    orderBy?: ParticipantPhotoOrderByWithRelationInput | ParticipantPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantPhotos.
     */
    cursor?: ParticipantPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantPhotos.
     */
    skip?: number
    distinct?: ParticipantPhotoScalarFieldEnum | ParticipantPhotoScalarFieldEnum[]
  }

  /**
   * ParticipantPhoto create
   */
  export type ParticipantPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipantPhoto.
     */
    data: XOR<ParticipantPhotoCreateInput, ParticipantPhotoUncheckedCreateInput>
  }

  /**
   * ParticipantPhoto createMany
   */
  export type ParticipantPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantPhotos.
     */
    data: ParticipantPhotoCreateManyInput | ParticipantPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantPhoto createManyAndReturn
   */
  export type ParticipantPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantPhotos.
     */
    data: ParticipantPhotoCreateManyInput | ParticipantPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantPhoto update
   */
  export type ParticipantPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipantPhoto.
     */
    data: XOR<ParticipantPhotoUpdateInput, ParticipantPhotoUncheckedUpdateInput>
    /**
     * Choose, which ParticipantPhoto to update.
     */
    where: ParticipantPhotoWhereUniqueInput
  }

  /**
   * ParticipantPhoto updateMany
   */
  export type ParticipantPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantPhotos.
     */
    data: XOR<ParticipantPhotoUpdateManyMutationInput, ParticipantPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantPhotos to update
     */
    where?: ParticipantPhotoWhereInput
    /**
     * Limit how many ParticipantPhotos to update.
     */
    limit?: number
  }

  /**
   * ParticipantPhoto updateManyAndReturn
   */
  export type ParticipantPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantPhotos.
     */
    data: XOR<ParticipantPhotoUpdateManyMutationInput, ParticipantPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantPhotos to update
     */
    where?: ParticipantPhotoWhereInput
    /**
     * Limit how many ParticipantPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantPhoto upsert
   */
  export type ParticipantPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipantPhoto to update in case it exists.
     */
    where: ParticipantPhotoWhereUniqueInput
    /**
     * In case the ParticipantPhoto found by the `where` argument doesn't exist, create a new ParticipantPhoto with this data.
     */
    create: XOR<ParticipantPhotoCreateInput, ParticipantPhotoUncheckedCreateInput>
    /**
     * In case the ParticipantPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantPhotoUpdateInput, ParticipantPhotoUncheckedUpdateInput>
  }

  /**
   * ParticipantPhoto delete
   */
  export type ParticipantPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
    /**
     * Filter which ParticipantPhoto to delete.
     */
    where: ParticipantPhotoWhereUniqueInput
  }

  /**
   * ParticipantPhoto deleteMany
   */
  export type ParticipantPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantPhotos to delete
     */
    where?: ParticipantPhotoWhereInput
    /**
     * Limit how many ParticipantPhotos to delete.
     */
    limit?: number
  }

  /**
   * ParticipantPhoto without action
   */
  export type ParticipantPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantPhoto
     */
    select?: ParticipantPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantPhoto
     */
    omit?: ParticipantPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantPhotoInclude<ExtArgs> | null
  }


  /**
   * Model GroupPhoto
   */

  export type AggregateGroupPhoto = {
    _count: GroupPhotoCountAggregateOutputType | null
    _avg: GroupPhotoAvgAggregateOutputType | null
    _sum: GroupPhotoSumAggregateOutputType | null
    _min: GroupPhotoMinAggregateOutputType | null
    _max: GroupPhotoMaxAggregateOutputType | null
  }

  export type GroupPhotoAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type GroupPhotoSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type GroupPhotoMinAggregateOutputType = {
    id: number | null
    photoUrl: string | null
    groupId: number | null
  }

  export type GroupPhotoMaxAggregateOutputType = {
    id: number | null
    photoUrl: string | null
    groupId: number | null
  }

  export type GroupPhotoCountAggregateOutputType = {
    id: number
    photoUrl: number
    groupId: number
    _all: number
  }


  export type GroupPhotoAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type GroupPhotoSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type GroupPhotoMinAggregateInputType = {
    id?: true
    photoUrl?: true
    groupId?: true
  }

  export type GroupPhotoMaxAggregateInputType = {
    id?: true
    photoUrl?: true
    groupId?: true
  }

  export type GroupPhotoCountAggregateInputType = {
    id?: true
    photoUrl?: true
    groupId?: true
    _all?: true
  }

  export type GroupPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupPhoto to aggregate.
     */
    where?: GroupPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPhotos to fetch.
     */
    orderBy?: GroupPhotoOrderByWithRelationInput | GroupPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupPhotos
    **/
    _count?: true | GroupPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupPhotoMaxAggregateInputType
  }

  export type GetGroupPhotoAggregateType<T extends GroupPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupPhoto[P]>
      : GetScalarType<T[P], AggregateGroupPhoto[P]>
  }




  export type GroupPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupPhotoWhereInput
    orderBy?: GroupPhotoOrderByWithAggregationInput | GroupPhotoOrderByWithAggregationInput[]
    by: GroupPhotoScalarFieldEnum[] | GroupPhotoScalarFieldEnum
    having?: GroupPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupPhotoCountAggregateInputType | true
    _avg?: GroupPhotoAvgAggregateInputType
    _sum?: GroupPhotoSumAggregateInputType
    _min?: GroupPhotoMinAggregateInputType
    _max?: GroupPhotoMaxAggregateInputType
  }

  export type GroupPhotoGroupByOutputType = {
    id: number
    photoUrl: string
    groupId: number
    _count: GroupPhotoCountAggregateOutputType | null
    _avg: GroupPhotoAvgAggregateOutputType | null
    _sum: GroupPhotoSumAggregateOutputType | null
    _min: GroupPhotoMinAggregateOutputType | null
    _max: GroupPhotoMaxAggregateOutputType | null
  }

  type GetGroupPhotoGroupByPayload<T extends GroupPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], GroupPhotoGroupByOutputType[P]>
        }
      >
    >


  export type GroupPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    groupId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupPhoto"]>

  export type GroupPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    groupId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupPhoto"]>

  export type GroupPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    groupId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupPhoto"]>

  export type GroupPhotoSelectScalar = {
    id?: boolean
    photoUrl?: boolean
    groupId?: boolean
  }

  export type GroupPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photoUrl" | "groupId", ExtArgs["result"]["groupPhoto"]>
  export type GroupPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupPhoto"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      photoUrl: string
      groupId: number
    }, ExtArgs["result"]["groupPhoto"]>
    composites: {}
  }

  type GroupPhotoGetPayload<S extends boolean | null | undefined | GroupPhotoDefaultArgs> = $Result.GetResult<Prisma.$GroupPhotoPayload, S>

  type GroupPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupPhotoCountAggregateInputType | true
    }

  export interface GroupPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupPhoto'], meta: { name: 'GroupPhoto' } }
    /**
     * Find zero or one GroupPhoto that matches the filter.
     * @param {GroupPhotoFindUniqueArgs} args - Arguments to find a GroupPhoto
     * @example
     * // Get one GroupPhoto
     * const groupPhoto = await prisma.groupPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupPhotoFindUniqueArgs>(args: SelectSubset<T, GroupPhotoFindUniqueArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupPhotoFindUniqueOrThrowArgs} args - Arguments to find a GroupPhoto
     * @example
     * // Get one GroupPhoto
     * const groupPhoto = await prisma.groupPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPhotoFindFirstArgs} args - Arguments to find a GroupPhoto
     * @example
     * // Get one GroupPhoto
     * const groupPhoto = await prisma.groupPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupPhotoFindFirstArgs>(args?: SelectSubset<T, GroupPhotoFindFirstArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPhotoFindFirstOrThrowArgs} args - Arguments to find a GroupPhoto
     * @example
     * // Get one GroupPhoto
     * const groupPhoto = await prisma.groupPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupPhotos
     * const groupPhotos = await prisma.groupPhoto.findMany()
     * 
     * // Get first 10 GroupPhotos
     * const groupPhotos = await prisma.groupPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupPhotoWithIdOnly = await prisma.groupPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupPhotoFindManyArgs>(args?: SelectSubset<T, GroupPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupPhoto.
     * @param {GroupPhotoCreateArgs} args - Arguments to create a GroupPhoto.
     * @example
     * // Create one GroupPhoto
     * const GroupPhoto = await prisma.groupPhoto.create({
     *   data: {
     *     // ... data to create a GroupPhoto
     *   }
     * })
     * 
     */
    create<T extends GroupPhotoCreateArgs>(args: SelectSubset<T, GroupPhotoCreateArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupPhotos.
     * @param {GroupPhotoCreateManyArgs} args - Arguments to create many GroupPhotos.
     * @example
     * // Create many GroupPhotos
     * const groupPhoto = await prisma.groupPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupPhotoCreateManyArgs>(args?: SelectSubset<T, GroupPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupPhotos and returns the data saved in the database.
     * @param {GroupPhotoCreateManyAndReturnArgs} args - Arguments to create many GroupPhotos.
     * @example
     * // Create many GroupPhotos
     * const groupPhoto = await prisma.groupPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupPhotos and only return the `id`
     * const groupPhotoWithIdOnly = await prisma.groupPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupPhoto.
     * @param {GroupPhotoDeleteArgs} args - Arguments to delete one GroupPhoto.
     * @example
     * // Delete one GroupPhoto
     * const GroupPhoto = await prisma.groupPhoto.delete({
     *   where: {
     *     // ... filter to delete one GroupPhoto
     *   }
     * })
     * 
     */
    delete<T extends GroupPhotoDeleteArgs>(args: SelectSubset<T, GroupPhotoDeleteArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupPhoto.
     * @param {GroupPhotoUpdateArgs} args - Arguments to update one GroupPhoto.
     * @example
     * // Update one GroupPhoto
     * const groupPhoto = await prisma.groupPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupPhotoUpdateArgs>(args: SelectSubset<T, GroupPhotoUpdateArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupPhotos.
     * @param {GroupPhotoDeleteManyArgs} args - Arguments to filter GroupPhotos to delete.
     * @example
     * // Delete a few GroupPhotos
     * const { count } = await prisma.groupPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupPhotoDeleteManyArgs>(args?: SelectSubset<T, GroupPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupPhotos
     * const groupPhoto = await prisma.groupPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupPhotoUpdateManyArgs>(args: SelectSubset<T, GroupPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupPhotos and returns the data updated in the database.
     * @param {GroupPhotoUpdateManyAndReturnArgs} args - Arguments to update many GroupPhotos.
     * @example
     * // Update many GroupPhotos
     * const groupPhoto = await prisma.groupPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupPhotos and only return the `id`
     * const groupPhotoWithIdOnly = await prisma.groupPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupPhoto.
     * @param {GroupPhotoUpsertArgs} args - Arguments to update or create a GroupPhoto.
     * @example
     * // Update or create a GroupPhoto
     * const groupPhoto = await prisma.groupPhoto.upsert({
     *   create: {
     *     // ... data to create a GroupPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupPhoto we want to update
     *   }
     * })
     */
    upsert<T extends GroupPhotoUpsertArgs>(args: SelectSubset<T, GroupPhotoUpsertArgs<ExtArgs>>): Prisma__GroupPhotoClient<$Result.GetResult<Prisma.$GroupPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPhotoCountArgs} args - Arguments to filter GroupPhotos to count.
     * @example
     * // Count the number of GroupPhotos
     * const count = await prisma.groupPhoto.count({
     *   where: {
     *     // ... the filter for the GroupPhotos we want to count
     *   }
     * })
    **/
    count<T extends GroupPhotoCountArgs>(
      args?: Subset<T, GroupPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupPhotoAggregateArgs>(args: Subset<T, GroupPhotoAggregateArgs>): Prisma.PrismaPromise<GetGroupPhotoAggregateType<T>>

    /**
     * Group by GroupPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPhotoGroupByArgs} args - Group by arguments.
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
      T extends GroupPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupPhotoGroupByArgs['orderBy'] }
        : { orderBy?: GroupPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupPhoto model
   */
  readonly fields: GroupPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupPhoto model
   */
  interface GroupPhotoFieldRefs {
    readonly id: FieldRef<"GroupPhoto", 'Int'>
    readonly photoUrl: FieldRef<"GroupPhoto", 'String'>
    readonly groupId: FieldRef<"GroupPhoto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GroupPhoto findUnique
   */
  export type GroupPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GroupPhoto to fetch.
     */
    where: GroupPhotoWhereUniqueInput
  }

  /**
   * GroupPhoto findUniqueOrThrow
   */
  export type GroupPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GroupPhoto to fetch.
     */
    where: GroupPhotoWhereUniqueInput
  }

  /**
   * GroupPhoto findFirst
   */
  export type GroupPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GroupPhoto to fetch.
     */
    where?: GroupPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPhotos to fetch.
     */
    orderBy?: GroupPhotoOrderByWithRelationInput | GroupPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupPhotos.
     */
    cursor?: GroupPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupPhotos.
     */
    distinct?: GroupPhotoScalarFieldEnum | GroupPhotoScalarFieldEnum[]
  }

  /**
   * GroupPhoto findFirstOrThrow
   */
  export type GroupPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GroupPhoto to fetch.
     */
    where?: GroupPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPhotos to fetch.
     */
    orderBy?: GroupPhotoOrderByWithRelationInput | GroupPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupPhotos.
     */
    cursor?: GroupPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupPhotos.
     */
    distinct?: GroupPhotoScalarFieldEnum | GroupPhotoScalarFieldEnum[]
  }

  /**
   * GroupPhoto findMany
   */
  export type GroupPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GroupPhotos to fetch.
     */
    where?: GroupPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPhotos to fetch.
     */
    orderBy?: GroupPhotoOrderByWithRelationInput | GroupPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupPhotos.
     */
    cursor?: GroupPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPhotos.
     */
    skip?: number
    distinct?: GroupPhotoScalarFieldEnum | GroupPhotoScalarFieldEnum[]
  }

  /**
   * GroupPhoto create
   */
  export type GroupPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupPhoto.
     */
    data: XOR<GroupPhotoCreateInput, GroupPhotoUncheckedCreateInput>
  }

  /**
   * GroupPhoto createMany
   */
  export type GroupPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupPhotos.
     */
    data: GroupPhotoCreateManyInput | GroupPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupPhoto createManyAndReturn
   */
  export type GroupPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many GroupPhotos.
     */
    data: GroupPhotoCreateManyInput | GroupPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupPhoto update
   */
  export type GroupPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupPhoto.
     */
    data: XOR<GroupPhotoUpdateInput, GroupPhotoUncheckedUpdateInput>
    /**
     * Choose, which GroupPhoto to update.
     */
    where: GroupPhotoWhereUniqueInput
  }

  /**
   * GroupPhoto updateMany
   */
  export type GroupPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupPhotos.
     */
    data: XOR<GroupPhotoUpdateManyMutationInput, GroupPhotoUncheckedUpdateManyInput>
    /**
     * Filter which GroupPhotos to update
     */
    where?: GroupPhotoWhereInput
    /**
     * Limit how many GroupPhotos to update.
     */
    limit?: number
  }

  /**
   * GroupPhoto updateManyAndReturn
   */
  export type GroupPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * The data used to update GroupPhotos.
     */
    data: XOR<GroupPhotoUpdateManyMutationInput, GroupPhotoUncheckedUpdateManyInput>
    /**
     * Filter which GroupPhotos to update
     */
    where?: GroupPhotoWhereInput
    /**
     * Limit how many GroupPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupPhoto upsert
   */
  export type GroupPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupPhoto to update in case it exists.
     */
    where: GroupPhotoWhereUniqueInput
    /**
     * In case the GroupPhoto found by the `where` argument doesn't exist, create a new GroupPhoto with this data.
     */
    create: XOR<GroupPhotoCreateInput, GroupPhotoUncheckedCreateInput>
    /**
     * In case the GroupPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupPhotoUpdateInput, GroupPhotoUncheckedUpdateInput>
  }

  /**
   * GroupPhoto delete
   */
  export type GroupPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
    /**
     * Filter which GroupPhoto to delete.
     */
    where: GroupPhotoWhereUniqueInput
  }

  /**
   * GroupPhoto deleteMany
   */
  export type GroupPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupPhotos to delete
     */
    where?: GroupPhotoWhereInput
    /**
     * Limit how many GroupPhotos to delete.
     */
    limit?: number
  }

  /**
   * GroupPhoto without action
   */
  export type GroupPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPhoto
     */
    select?: GroupPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPhoto
     */
    omit?: GroupPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPhotoInclude<ExtArgs> | null
  }


  /**
   * Model GroupBadge
   */

  export type AggregateGroupBadge = {
    _count: GroupBadgeCountAggregateOutputType | null
    _avg: GroupBadgeAvgAggregateOutputType | null
    _sum: GroupBadgeSumAggregateOutputType | null
    _min: GroupBadgeMinAggregateOutputType | null
    _max: GroupBadgeMaxAggregateOutputType | null
  }

  export type GroupBadgeAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type GroupBadgeSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type GroupBadgeMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    participantsOver10: boolean | null
    recordsOver100: boolean | null
    recommandationsOver100: boolean | null
  }

  export type GroupBadgeMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    participantsOver10: boolean | null
    recordsOver100: boolean | null
    recommandationsOver100: boolean | null
  }

  export type GroupBadgeCountAggregateOutputType = {
    id: number
    groupId: number
    participantsOver10: number
    recordsOver100: number
    recommandationsOver100: number
    _all: number
  }


  export type GroupBadgeAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type GroupBadgeSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type GroupBadgeMinAggregateInputType = {
    id?: true
    groupId?: true
    participantsOver10?: true
    recordsOver100?: true
    recommandationsOver100?: true
  }

  export type GroupBadgeMaxAggregateInputType = {
    id?: true
    groupId?: true
    participantsOver10?: true
    recordsOver100?: true
    recommandationsOver100?: true
  }

  export type GroupBadgeCountAggregateInputType = {
    id?: true
    groupId?: true
    participantsOver10?: true
    recordsOver100?: true
    recommandationsOver100?: true
    _all?: true
  }

  export type GroupBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupBadge to aggregate.
     */
    where?: GroupBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupBadges to fetch.
     */
    orderBy?: GroupBadgeOrderByWithRelationInput | GroupBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupBadges
    **/
    _count?: true | GroupBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupBadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupBadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupBadgeMaxAggregateInputType
  }

  export type GetGroupBadgeAggregateType<T extends GroupBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupBadge[P]>
      : GetScalarType<T[P], AggregateGroupBadge[P]>
  }




  export type GroupBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupBadgeWhereInput
    orderBy?: GroupBadgeOrderByWithAggregationInput | GroupBadgeOrderByWithAggregationInput[]
    by: GroupBadgeScalarFieldEnum[] | GroupBadgeScalarFieldEnum
    having?: GroupBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupBadgeCountAggregateInputType | true
    _avg?: GroupBadgeAvgAggregateInputType
    _sum?: GroupBadgeSumAggregateInputType
    _min?: GroupBadgeMinAggregateInputType
    _max?: GroupBadgeMaxAggregateInputType
  }

  export type GroupBadgeGroupByOutputType = {
    id: number
    groupId: number
    participantsOver10: boolean
    recordsOver100: boolean
    recommandationsOver100: boolean
    _count: GroupBadgeCountAggregateOutputType | null
    _avg: GroupBadgeAvgAggregateOutputType | null
    _sum: GroupBadgeSumAggregateOutputType | null
    _min: GroupBadgeMinAggregateOutputType | null
    _max: GroupBadgeMaxAggregateOutputType | null
  }

  type GetGroupBadgeGroupByPayload<T extends GroupBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], GroupBadgeGroupByOutputType[P]>
        }
      >
    >


  export type GroupBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupBadge"]>

  export type GroupBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupBadge"]>

  export type GroupBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupBadge"]>

  export type GroupBadgeSelectScalar = {
    id?: boolean
    groupId?: boolean
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
  }

  export type GroupBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "participantsOver10" | "recordsOver100" | "recommandationsOver100", ExtArgs["result"]["groupBadge"]>
  export type GroupBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupBadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupBadge"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      participantsOver10: boolean
      recordsOver100: boolean
      recommandationsOver100: boolean
    }, ExtArgs["result"]["groupBadge"]>
    composites: {}
  }

  type GroupBadgeGetPayload<S extends boolean | null | undefined | GroupBadgeDefaultArgs> = $Result.GetResult<Prisma.$GroupBadgePayload, S>

  type GroupBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupBadgeCountAggregateInputType | true
    }

  export interface GroupBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupBadge'], meta: { name: 'GroupBadge' } }
    /**
     * Find zero or one GroupBadge that matches the filter.
     * @param {GroupBadgeFindUniqueArgs} args - Arguments to find a GroupBadge
     * @example
     * // Get one GroupBadge
     * const groupBadge = await prisma.groupBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupBadgeFindUniqueArgs>(args: SelectSubset<T, GroupBadgeFindUniqueArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupBadgeFindUniqueOrThrowArgs} args - Arguments to find a GroupBadge
     * @example
     * // Get one GroupBadge
     * const groupBadge = await prisma.groupBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupBadgeFindFirstArgs} args - Arguments to find a GroupBadge
     * @example
     * // Get one GroupBadge
     * const groupBadge = await prisma.groupBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupBadgeFindFirstArgs>(args?: SelectSubset<T, GroupBadgeFindFirstArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupBadgeFindFirstOrThrowArgs} args - Arguments to find a GroupBadge
     * @example
     * // Get one GroupBadge
     * const groupBadge = await prisma.groupBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupBadges
     * const groupBadges = await prisma.groupBadge.findMany()
     * 
     * // Get first 10 GroupBadges
     * const groupBadges = await prisma.groupBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupBadgeWithIdOnly = await prisma.groupBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupBadgeFindManyArgs>(args?: SelectSubset<T, GroupBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupBadge.
     * @param {GroupBadgeCreateArgs} args - Arguments to create a GroupBadge.
     * @example
     * // Create one GroupBadge
     * const GroupBadge = await prisma.groupBadge.create({
     *   data: {
     *     // ... data to create a GroupBadge
     *   }
     * })
     * 
     */
    create<T extends GroupBadgeCreateArgs>(args: SelectSubset<T, GroupBadgeCreateArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupBadges.
     * @param {GroupBadgeCreateManyArgs} args - Arguments to create many GroupBadges.
     * @example
     * // Create many GroupBadges
     * const groupBadge = await prisma.groupBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupBadgeCreateManyArgs>(args?: SelectSubset<T, GroupBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupBadges and returns the data saved in the database.
     * @param {GroupBadgeCreateManyAndReturnArgs} args - Arguments to create many GroupBadges.
     * @example
     * // Create many GroupBadges
     * const groupBadge = await prisma.groupBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupBadges and only return the `id`
     * const groupBadgeWithIdOnly = await prisma.groupBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupBadge.
     * @param {GroupBadgeDeleteArgs} args - Arguments to delete one GroupBadge.
     * @example
     * // Delete one GroupBadge
     * const GroupBadge = await prisma.groupBadge.delete({
     *   where: {
     *     // ... filter to delete one GroupBadge
     *   }
     * })
     * 
     */
    delete<T extends GroupBadgeDeleteArgs>(args: SelectSubset<T, GroupBadgeDeleteArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupBadge.
     * @param {GroupBadgeUpdateArgs} args - Arguments to update one GroupBadge.
     * @example
     * // Update one GroupBadge
     * const groupBadge = await prisma.groupBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupBadgeUpdateArgs>(args: SelectSubset<T, GroupBadgeUpdateArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupBadges.
     * @param {GroupBadgeDeleteManyArgs} args - Arguments to filter GroupBadges to delete.
     * @example
     * // Delete a few GroupBadges
     * const { count } = await prisma.groupBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupBadgeDeleteManyArgs>(args?: SelectSubset<T, GroupBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupBadges
     * const groupBadge = await prisma.groupBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupBadgeUpdateManyArgs>(args: SelectSubset<T, GroupBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupBadges and returns the data updated in the database.
     * @param {GroupBadgeUpdateManyAndReturnArgs} args - Arguments to update many GroupBadges.
     * @example
     * // Update many GroupBadges
     * const groupBadge = await prisma.groupBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupBadges and only return the `id`
     * const groupBadgeWithIdOnly = await prisma.groupBadge.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupBadge.
     * @param {GroupBadgeUpsertArgs} args - Arguments to update or create a GroupBadge.
     * @example
     * // Update or create a GroupBadge
     * const groupBadge = await prisma.groupBadge.upsert({
     *   create: {
     *     // ... data to create a GroupBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupBadge we want to update
     *   }
     * })
     */
    upsert<T extends GroupBadgeUpsertArgs>(args: SelectSubset<T, GroupBadgeUpsertArgs<ExtArgs>>): Prisma__GroupBadgeClient<$Result.GetResult<Prisma.$GroupBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupBadgeCountArgs} args - Arguments to filter GroupBadges to count.
     * @example
     * // Count the number of GroupBadges
     * const count = await prisma.groupBadge.count({
     *   where: {
     *     // ... the filter for the GroupBadges we want to count
     *   }
     * })
    **/
    count<T extends GroupBadgeCountArgs>(
      args?: Subset<T, GroupBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupBadgeAggregateArgs>(args: Subset<T, GroupBadgeAggregateArgs>): Prisma.PrismaPromise<GetGroupBadgeAggregateType<T>>

    /**
     * Group by GroupBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupBadgeGroupByArgs} args - Group by arguments.
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
      T extends GroupBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupBadgeGroupByArgs['orderBy'] }
        : { orderBy?: GroupBadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupBadge model
   */
  readonly fields: GroupBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupBadge model
   */
  interface GroupBadgeFieldRefs {
    readonly id: FieldRef<"GroupBadge", 'Int'>
    readonly groupId: FieldRef<"GroupBadge", 'Int'>
    readonly participantsOver10: FieldRef<"GroupBadge", 'Boolean'>
    readonly recordsOver100: FieldRef<"GroupBadge", 'Boolean'>
    readonly recommandationsOver100: FieldRef<"GroupBadge", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GroupBadge findUnique
   */
  export type GroupBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * Filter, which GroupBadge to fetch.
     */
    where: GroupBadgeWhereUniqueInput
  }

  /**
   * GroupBadge findUniqueOrThrow
   */
  export type GroupBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * Filter, which GroupBadge to fetch.
     */
    where: GroupBadgeWhereUniqueInput
  }

  /**
   * GroupBadge findFirst
   */
  export type GroupBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * Filter, which GroupBadge to fetch.
     */
    where?: GroupBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupBadges to fetch.
     */
    orderBy?: GroupBadgeOrderByWithRelationInput | GroupBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupBadges.
     */
    cursor?: GroupBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupBadges.
     */
    distinct?: GroupBadgeScalarFieldEnum | GroupBadgeScalarFieldEnum[]
  }

  /**
   * GroupBadge findFirstOrThrow
   */
  export type GroupBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * Filter, which GroupBadge to fetch.
     */
    where?: GroupBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupBadges to fetch.
     */
    orderBy?: GroupBadgeOrderByWithRelationInput | GroupBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupBadges.
     */
    cursor?: GroupBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupBadges.
     */
    distinct?: GroupBadgeScalarFieldEnum | GroupBadgeScalarFieldEnum[]
  }

  /**
   * GroupBadge findMany
   */
  export type GroupBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * Filter, which GroupBadges to fetch.
     */
    where?: GroupBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupBadges to fetch.
     */
    orderBy?: GroupBadgeOrderByWithRelationInput | GroupBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupBadges.
     */
    cursor?: GroupBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupBadges.
     */
    skip?: number
    distinct?: GroupBadgeScalarFieldEnum | GroupBadgeScalarFieldEnum[]
  }

  /**
   * GroupBadge create
   */
  export type GroupBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupBadge.
     */
    data: XOR<GroupBadgeCreateInput, GroupBadgeUncheckedCreateInput>
  }

  /**
   * GroupBadge createMany
   */
  export type GroupBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupBadges.
     */
    data: GroupBadgeCreateManyInput | GroupBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupBadge createManyAndReturn
   */
  export type GroupBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many GroupBadges.
     */
    data: GroupBadgeCreateManyInput | GroupBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupBadge update
   */
  export type GroupBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupBadge.
     */
    data: XOR<GroupBadgeUpdateInput, GroupBadgeUncheckedUpdateInput>
    /**
     * Choose, which GroupBadge to update.
     */
    where: GroupBadgeWhereUniqueInput
  }

  /**
   * GroupBadge updateMany
   */
  export type GroupBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupBadges.
     */
    data: XOR<GroupBadgeUpdateManyMutationInput, GroupBadgeUncheckedUpdateManyInput>
    /**
     * Filter which GroupBadges to update
     */
    where?: GroupBadgeWhereInput
    /**
     * Limit how many GroupBadges to update.
     */
    limit?: number
  }

  /**
   * GroupBadge updateManyAndReturn
   */
  export type GroupBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * The data used to update GroupBadges.
     */
    data: XOR<GroupBadgeUpdateManyMutationInput, GroupBadgeUncheckedUpdateManyInput>
    /**
     * Filter which GroupBadges to update
     */
    where?: GroupBadgeWhereInput
    /**
     * Limit how many GroupBadges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupBadge upsert
   */
  export type GroupBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupBadge to update in case it exists.
     */
    where: GroupBadgeWhereUniqueInput
    /**
     * In case the GroupBadge found by the `where` argument doesn't exist, create a new GroupBadge with this data.
     */
    create: XOR<GroupBadgeCreateInput, GroupBadgeUncheckedCreateInput>
    /**
     * In case the GroupBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupBadgeUpdateInput, GroupBadgeUncheckedUpdateInput>
  }

  /**
   * GroupBadge delete
   */
  export type GroupBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
    /**
     * Filter which GroupBadge to delete.
     */
    where: GroupBadgeWhereUniqueInput
  }

  /**
   * GroupBadge deleteMany
   */
  export type GroupBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupBadges to delete
     */
    where?: GroupBadgeWhereInput
    /**
     * Limit how many GroupBadges to delete.
     */
    limit?: number
  }

  /**
   * GroupBadge without action
   */
  export type GroupBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupBadge
     */
    select?: GroupBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupBadge
     */
    omit?: GroupBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupBadgeInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    tagName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    groupId: number | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    tagName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    groupId: number | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    tagName: number
    createdAt: number
    updatedAt: number
    groupId: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    tagName?: true
    createdAt?: true
    updatedAt?: true
    groupId?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    tagName?: true
    createdAt?: true
    updatedAt?: true
    groupId?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    tagName?: true
    createdAt?: true
    updatedAt?: true
    groupId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    tagName: string
    createdAt: Date
    updatedAt: Date
    groupId: number
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    tagName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupId?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagName" | "createdAt" | "updatedAt" | "groupId", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tagName: string
      createdAt: Date
      updatedAt: Date
      groupId: number
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly tagName: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
    readonly groupId: FieldRef<"Tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
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


  export const GroupScalarFieldEnum: {
    id: 'id',
    groupName: 'groupName',
    description: 'description',
    goalRep: 'goalRep',
    discordWebHookURl: 'discordWebHookURl',
    discordInviteUrl: 'discordInviteUrl',
    ownerNickname: 'ownerNickname',
    ownerPassword: 'ownerPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    nickname: 'nickname',
    password: 'password',
    recordCount: 'recordCount',
    recordTime: 'recordTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const ExerciseRecordScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    exerciseType: 'exerciseType',
    description: 'description',
    time: 'time',
    distance: 'distance',
    participantId: 'participantId'
  };

  export type ExerciseRecordScalarFieldEnum = (typeof ExerciseRecordScalarFieldEnum)[keyof typeof ExerciseRecordScalarFieldEnum]


  export const ParticipantPhotoScalarFieldEnum: {
    id: 'id',
    exerciseRecordId: 'exerciseRecordId',
    photoUrl: 'photoUrl'
  };

  export type ParticipantPhotoScalarFieldEnum = (typeof ParticipantPhotoScalarFieldEnum)[keyof typeof ParticipantPhotoScalarFieldEnum]


  export const GroupPhotoScalarFieldEnum: {
    id: 'id',
    photoUrl: 'photoUrl',
    groupId: 'groupId'
  };

  export type GroupPhotoScalarFieldEnum = (typeof GroupPhotoScalarFieldEnum)[keyof typeof GroupPhotoScalarFieldEnum]


  export const GroupBadgeScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    participantsOver10: 'participantsOver10',
    recordsOver100: 'recordsOver100',
    recommandationsOver100: 'recommandationsOver100'
  };

  export type GroupBadgeScalarFieldEnum = (typeof GroupBadgeScalarFieldEnum)[keyof typeof GroupBadgeScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    tagName: 'tagName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    groupId: 'groupId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ExerciseType'
   */
  export type EnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType'>
    


  /**
   * Reference to a field of type 'ExerciseType[]'
   */
  export type ListEnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    groupName?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    goalRep?: IntFilter<"Group"> | number
    discordWebHookURl?: StringFilter<"Group"> | string
    discordInviteUrl?: StringFilter<"Group"> | string
    ownerNickname?: StringFilter<"Group"> | string
    ownerPassword?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    groupPhoto?: XOR<GroupPhotoNullableScalarRelationFilter, GroupPhotoWhereInput> | null
    groupBadge?: XOR<GroupBadgeNullableScalarRelationFilter, GroupBadgeWhereInput> | null
    tag?: TagListRelationFilter
    participant?: ParticipantListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    groupName?: SortOrder
    description?: SortOrderInput | SortOrder
    goalRep?: SortOrder
    discordWebHookURl?: SortOrder
    discordInviteUrl?: SortOrder
    ownerNickname?: SortOrder
    ownerPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupPhoto?: GroupPhotoOrderByWithRelationInput
    groupBadge?: GroupBadgeOrderByWithRelationInput
    tag?: TagOrderByRelationAggregateInput
    participant?: ParticipantOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groupName?: string
    discordWebHookURl?: string
    discordInviteUrl?: string
    ownerNickname?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    description?: StringNullableFilter<"Group"> | string | null
    goalRep?: IntFilter<"Group"> | number
    ownerPassword?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    groupPhoto?: XOR<GroupPhotoNullableScalarRelationFilter, GroupPhotoWhereInput> | null
    groupBadge?: XOR<GroupBadgeNullableScalarRelationFilter, GroupBadgeWhereInput> | null
    tag?: TagListRelationFilter
    participant?: ParticipantListRelationFilter
  }, "id" | "groupName" | "discordWebHookURl" | "discordInviteUrl" | "ownerNickname">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    groupName?: SortOrder
    description?: SortOrderInput | SortOrder
    goalRep?: SortOrder
    discordWebHookURl?: SortOrder
    discordInviteUrl?: SortOrder
    ownerNickname?: SortOrder
    ownerPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    groupName?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    goalRep?: IntWithAggregatesFilter<"Group"> | number
    discordWebHookURl?: StringWithAggregatesFilter<"Group"> | string
    discordInviteUrl?: StringWithAggregatesFilter<"Group"> | string
    ownerNickname?: StringWithAggregatesFilter<"Group"> | string
    ownerPassword?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: IntFilter<"Participant"> | number
    groupId?: IntFilter<"Participant"> | number
    nickname?: StringFilter<"Participant"> | string
    password?: StringFilter<"Participant"> | string
    recordCount?: IntFilter<"Participant"> | number
    recordTime?: IntFilter<"Participant"> | number
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    likeId?: XOR<LikeNullableScalarRelationFilter, LikeWhereInput> | null
    exerciseRecords?: ExerciseRecordListRelationFilter
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recordCount?: SortOrder
    recordTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    likeId?: LikeOrderByWithRelationInput
    exerciseRecords?: ExerciseRecordOrderByRelationAggregateInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nickname?: string
    participantInfo?: ParticipantParticipantInfoCompoundUniqueInput
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    groupId?: IntFilter<"Participant"> | number
    password?: StringFilter<"Participant"> | string
    recordCount?: IntFilter<"Participant"> | number
    recordTime?: IntFilter<"Participant"> | number
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    likeId?: XOR<LikeNullableScalarRelationFilter, LikeWhereInput> | null
    exerciseRecords?: ExerciseRecordListRelationFilter
  }, "id" | "nickname" | "participantInfo">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recordCount?: SortOrder
    recordTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _avg?: ParticipantAvgOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
    _sum?: ParticipantSumOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participant"> | number
    groupId?: IntWithAggregatesFilter<"Participant"> | number
    nickname?: StringWithAggregatesFilter<"Participant"> | string
    password?: StringWithAggregatesFilter<"Participant"> | string
    recordCount?: IntWithAggregatesFilter<"Participant"> | number
    recordTime?: IntWithAggregatesFilter<"Participant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: IntFilter<"Like"> | number
    participantId?: IntFilter<"Like"> | number
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    participant?: ParticipantOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    participantId?: number
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id" | "participantId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Like"> | number
    participantId?: IntWithAggregatesFilter<"Like"> | number
  }

  export type ExerciseRecordWhereInput = {
    AND?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    OR?: ExerciseRecordWhereInput[]
    NOT?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    id?: IntFilter<"ExerciseRecord"> | number
    groupId?: IntFilter<"ExerciseRecord"> | number
    exerciseType?: EnumExerciseTypeFilter<"ExerciseRecord"> | $Enums.ExerciseType
    description?: StringFilter<"ExerciseRecord"> | string
    time?: IntFilter<"ExerciseRecord"> | number
    distance?: IntFilter<"ExerciseRecord"> | number
    participantId?: IntFilter<"ExerciseRecord"> | number
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    participantPhoto?: ParticipantPhotoListRelationFilter
  }

  export type ExerciseRecordOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    exerciseType?: SortOrder
    description?: SortOrder
    time?: SortOrder
    distance?: SortOrder
    participantId?: SortOrder
    participant?: ParticipantOrderByWithRelationInput
    participantPhoto?: ParticipantPhotoOrderByRelationAggregateInput
  }

  export type ExerciseRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    OR?: ExerciseRecordWhereInput[]
    NOT?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    groupId?: IntFilter<"ExerciseRecord"> | number
    exerciseType?: EnumExerciseTypeFilter<"ExerciseRecord"> | $Enums.ExerciseType
    description?: StringFilter<"ExerciseRecord"> | string
    time?: IntFilter<"ExerciseRecord"> | number
    distance?: IntFilter<"ExerciseRecord"> | number
    participantId?: IntFilter<"ExerciseRecord"> | number
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    participantPhoto?: ParticipantPhotoListRelationFilter
  }, "id">

  export type ExerciseRecordOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    exerciseType?: SortOrder
    description?: SortOrder
    time?: SortOrder
    distance?: SortOrder
    participantId?: SortOrder
    _count?: ExerciseRecordCountOrderByAggregateInput
    _avg?: ExerciseRecordAvgOrderByAggregateInput
    _max?: ExerciseRecordMaxOrderByAggregateInput
    _min?: ExerciseRecordMinOrderByAggregateInput
    _sum?: ExerciseRecordSumOrderByAggregateInput
  }

  export type ExerciseRecordScalarWhereWithAggregatesInput = {
    AND?: ExerciseRecordScalarWhereWithAggregatesInput | ExerciseRecordScalarWhereWithAggregatesInput[]
    OR?: ExerciseRecordScalarWhereWithAggregatesInput[]
    NOT?: ExerciseRecordScalarWhereWithAggregatesInput | ExerciseRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    groupId?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    exerciseType?: EnumExerciseTypeWithAggregatesFilter<"ExerciseRecord"> | $Enums.ExerciseType
    description?: StringWithAggregatesFilter<"ExerciseRecord"> | string
    time?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    distance?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    participantId?: IntWithAggregatesFilter<"ExerciseRecord"> | number
  }

  export type ParticipantPhotoWhereInput = {
    AND?: ParticipantPhotoWhereInput | ParticipantPhotoWhereInput[]
    OR?: ParticipantPhotoWhereInput[]
    NOT?: ParticipantPhotoWhereInput | ParticipantPhotoWhereInput[]
    id?: IntFilter<"ParticipantPhoto"> | number
    exerciseRecordId?: IntFilter<"ParticipantPhoto"> | number
    photoUrl?: StringFilter<"ParticipantPhoto"> | string
    exerciseRecord?: XOR<ExerciseRecordScalarRelationFilter, ExerciseRecordWhereInput>
  }

  export type ParticipantPhotoOrderByWithRelationInput = {
    id?: SortOrder
    exerciseRecordId?: SortOrder
    photoUrl?: SortOrder
    exerciseRecord?: ExerciseRecordOrderByWithRelationInput
  }

  export type ParticipantPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    photoUrl?: string
    AND?: ParticipantPhotoWhereInput | ParticipantPhotoWhereInput[]
    OR?: ParticipantPhotoWhereInput[]
    NOT?: ParticipantPhotoWhereInput | ParticipantPhotoWhereInput[]
    exerciseRecordId?: IntFilter<"ParticipantPhoto"> | number
    exerciseRecord?: XOR<ExerciseRecordScalarRelationFilter, ExerciseRecordWhereInput>
  }, "id" | "photoUrl">

  export type ParticipantPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseRecordId?: SortOrder
    photoUrl?: SortOrder
    _count?: ParticipantPhotoCountOrderByAggregateInput
    _avg?: ParticipantPhotoAvgOrderByAggregateInput
    _max?: ParticipantPhotoMaxOrderByAggregateInput
    _min?: ParticipantPhotoMinOrderByAggregateInput
    _sum?: ParticipantPhotoSumOrderByAggregateInput
  }

  export type ParticipantPhotoScalarWhereWithAggregatesInput = {
    AND?: ParticipantPhotoScalarWhereWithAggregatesInput | ParticipantPhotoScalarWhereWithAggregatesInput[]
    OR?: ParticipantPhotoScalarWhereWithAggregatesInput[]
    NOT?: ParticipantPhotoScalarWhereWithAggregatesInput | ParticipantPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipantPhoto"> | number
    exerciseRecordId?: IntWithAggregatesFilter<"ParticipantPhoto"> | number
    photoUrl?: StringWithAggregatesFilter<"ParticipantPhoto"> | string
  }

  export type GroupPhotoWhereInput = {
    AND?: GroupPhotoWhereInput | GroupPhotoWhereInput[]
    OR?: GroupPhotoWhereInput[]
    NOT?: GroupPhotoWhereInput | GroupPhotoWhereInput[]
    id?: IntFilter<"GroupPhoto"> | number
    photoUrl?: StringFilter<"GroupPhoto"> | string
    groupId?: IntFilter<"GroupPhoto"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupPhotoOrderByWithRelationInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    groupId?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type GroupPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groupId?: number
    AND?: GroupPhotoWhereInput | GroupPhotoWhereInput[]
    OR?: GroupPhotoWhereInput[]
    NOT?: GroupPhotoWhereInput | GroupPhotoWhereInput[]
    photoUrl?: StringFilter<"GroupPhoto"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id" | "groupId">

  export type GroupPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    groupId?: SortOrder
    _count?: GroupPhotoCountOrderByAggregateInput
    _avg?: GroupPhotoAvgOrderByAggregateInput
    _max?: GroupPhotoMaxOrderByAggregateInput
    _min?: GroupPhotoMinOrderByAggregateInput
    _sum?: GroupPhotoSumOrderByAggregateInput
  }

  export type GroupPhotoScalarWhereWithAggregatesInput = {
    AND?: GroupPhotoScalarWhereWithAggregatesInput | GroupPhotoScalarWhereWithAggregatesInput[]
    OR?: GroupPhotoScalarWhereWithAggregatesInput[]
    NOT?: GroupPhotoScalarWhereWithAggregatesInput | GroupPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GroupPhoto"> | number
    photoUrl?: StringWithAggregatesFilter<"GroupPhoto"> | string
    groupId?: IntWithAggregatesFilter<"GroupPhoto"> | number
  }

  export type GroupBadgeWhereInput = {
    AND?: GroupBadgeWhereInput | GroupBadgeWhereInput[]
    OR?: GroupBadgeWhereInput[]
    NOT?: GroupBadgeWhereInput | GroupBadgeWhereInput[]
    id?: IntFilter<"GroupBadge"> | number
    groupId?: IntFilter<"GroupBadge"> | number
    participantsOver10?: BoolFilter<"GroupBadge"> | boolean
    recordsOver100?: BoolFilter<"GroupBadge"> | boolean
    recommandationsOver100?: BoolFilter<"GroupBadge"> | boolean
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupBadgeOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    participantsOver10?: SortOrder
    recordsOver100?: SortOrder
    recommandationsOver100?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type GroupBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groupId?: number
    AND?: GroupBadgeWhereInput | GroupBadgeWhereInput[]
    OR?: GroupBadgeWhereInput[]
    NOT?: GroupBadgeWhereInput | GroupBadgeWhereInput[]
    participantsOver10?: BoolFilter<"GroupBadge"> | boolean
    recordsOver100?: BoolFilter<"GroupBadge"> | boolean
    recommandationsOver100?: BoolFilter<"GroupBadge"> | boolean
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id" | "groupId">

  export type GroupBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    participantsOver10?: SortOrder
    recordsOver100?: SortOrder
    recommandationsOver100?: SortOrder
    _count?: GroupBadgeCountOrderByAggregateInput
    _avg?: GroupBadgeAvgOrderByAggregateInput
    _max?: GroupBadgeMaxOrderByAggregateInput
    _min?: GroupBadgeMinOrderByAggregateInput
    _sum?: GroupBadgeSumOrderByAggregateInput
  }

  export type GroupBadgeScalarWhereWithAggregatesInput = {
    AND?: GroupBadgeScalarWhereWithAggregatesInput | GroupBadgeScalarWhereWithAggregatesInput[]
    OR?: GroupBadgeScalarWhereWithAggregatesInput[]
    NOT?: GroupBadgeScalarWhereWithAggregatesInput | GroupBadgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GroupBadge"> | number
    groupId?: IntWithAggregatesFilter<"GroupBadge"> | number
    participantsOver10?: BoolWithAggregatesFilter<"GroupBadge"> | boolean
    recordsOver100?: BoolWithAggregatesFilter<"GroupBadge"> | boolean
    recommandationsOver100?: BoolWithAggregatesFilter<"GroupBadge"> | boolean
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    tagName?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    groupId?: IntFilter<"Tag"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    tagName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tagName?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    groupId?: IntFilter<"Tag"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    tagName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    tagName?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    groupId?: IntWithAggregatesFilter<"Tag"> | number
  }

  export type GroupCreateInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPhoto?: GroupPhotoCreateNestedOneWithoutGroupInput
    groupBadge?: GroupBadgeCreateNestedOneWithoutGroupInput
    tag?: TagCreateNestedManyWithoutGroupInput
    participant?: ParticipantCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPhoto?: GroupPhotoUncheckedCreateNestedOneWithoutGroupInput
    groupBadge?: GroupBadgeUncheckedCreateNestedOneWithoutGroupInput
    tag?: TagUncheckedCreateNestedManyWithoutGroupInput
    participant?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPhoto?: GroupPhotoUpdateOneWithoutGroupNestedInput
    groupBadge?: GroupBadgeUpdateOneWithoutGroupNestedInput
    tag?: TagUpdateManyWithoutGroupNestedInput
    participant?: ParticipantUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPhoto?: GroupPhotoUncheckedUpdateOneWithoutGroupNestedInput
    groupBadge?: GroupBadgeUncheckedUpdateOneWithoutGroupNestedInput
    tag?: TagUncheckedUpdateManyWithoutGroupNestedInput
    participant?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateInput = {
    id: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutParticipantInput
    likeId?: LikeCreateNestedOneWithoutParticipantInput
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    id: number
    groupId: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likeId?: LikeUncheckedCreateNestedOneWithoutParticipantInput
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutParticipantNestedInput
    likeId?: LikeUpdateOneWithoutParticipantNestedInput
    exerciseRecords?: ExerciseRecordUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeId?: LikeUncheckedUpdateOneWithoutParticipantNestedInput
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateManyInput = {
    id: number
    groupId: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    id: number
    participant: ParticipantCreateNestedOneWithoutLikeIdInput
  }

  export type LikeUncheckedCreateInput = {
    id: number
    participantId: number
  }

  export type LikeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant?: ParticipantUpdateOneRequiredWithoutLikeIdNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeCreateManyInput = {
    id: number
    participantId: number
  }

  export type LikeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordCreateInput = {
    id: number
    groupId: number
    exerciseType?: $Enums.ExerciseType
    description: string
    time?: number
    distance?: number
    participant: ParticipantCreateNestedOneWithoutExerciseRecordsInput
    participantPhoto?: ParticipantPhotoCreateNestedManyWithoutExerciseRecordInput
  }

  export type ExerciseRecordUncheckedCreateInput = {
    id: number
    groupId: number
    exerciseType?: $Enums.ExerciseType
    description: string
    time?: number
    distance?: number
    participantId: number
    participantPhoto?: ParticipantPhotoUncheckedCreateNestedManyWithoutExerciseRecordInput
  }

  export type ExerciseRecordUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    participant?: ParticipantUpdateOneRequiredWithoutExerciseRecordsNestedInput
    participantPhoto?: ParticipantPhotoUpdateManyWithoutExerciseRecordNestedInput
  }

  export type ExerciseRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    participantPhoto?: ParticipantPhotoUncheckedUpdateManyWithoutExerciseRecordNestedInput
  }

  export type ExerciseRecordCreateManyInput = {
    id: number
    groupId: number
    exerciseType?: $Enums.ExerciseType
    description: string
    time?: number
    distance?: number
    participantId: number
  }

  export type ExerciseRecordUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantPhotoCreateInput = {
    id: number
    photoUrl: string
    exerciseRecord: ExerciseRecordCreateNestedOneWithoutParticipantPhotoInput
  }

  export type ParticipantPhotoUncheckedCreateInput = {
    id: number
    exerciseRecordId: number
    photoUrl: string
  }

  export type ParticipantPhotoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    exerciseRecord?: ExerciseRecordUpdateOneRequiredWithoutParticipantPhotoNestedInput
  }

  export type ParticipantPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseRecordId?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantPhotoCreateManyInput = {
    id: number
    exerciseRecordId: number
    photoUrl: string
  }

  export type ParticipantPhotoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseRecordId?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type GroupPhotoCreateInput = {
    id: number
    photoUrl: string
    group: GroupCreateNestedOneWithoutGroupPhotoInput
  }

  export type GroupPhotoUncheckedCreateInput = {
    id: number
    photoUrl: string
    groupId: number
  }

  export type GroupPhotoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutGroupPhotoNestedInput
  }

  export type GroupPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupPhotoCreateManyInput = {
    id: number
    photoUrl: string
    groupId: number
  }

  export type GroupPhotoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type GroupPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupBadgeCreateInput = {
    id: number
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
    group: GroupCreateNestedOneWithoutGroupBadgeInput
  }

  export type GroupBadgeUncheckedCreateInput = {
    id: number
    groupId: number
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
  }

  export type GroupBadgeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantsOver10?: BoolFieldUpdateOperationsInput | boolean
    recordsOver100?: BoolFieldUpdateOperationsInput | boolean
    recommandationsOver100?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutGroupBadgeNestedInput
  }

  export type GroupBadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    participantsOver10?: BoolFieldUpdateOperationsInput | boolean
    recordsOver100?: BoolFieldUpdateOperationsInput | boolean
    recommandationsOver100?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupBadgeCreateManyInput = {
    id: number
    groupId: number
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
  }

  export type GroupBadgeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantsOver10?: BoolFieldUpdateOperationsInput | boolean
    recordsOver100?: BoolFieldUpdateOperationsInput | boolean
    recommandationsOver100?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupBadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    participantsOver10?: BoolFieldUpdateOperationsInput | boolean
    recordsOver100?: BoolFieldUpdateOperationsInput | boolean
    recommandationsOver100?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagCreateInput = {
    id: number
    tagName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id: number
    tagName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId: number
  }

  export type TagUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateManyInput = {
    id: number
    tagName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId: number
  }

  export type TagUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type GroupPhotoNullableScalarRelationFilter = {
    is?: GroupPhotoWhereInput | null
    isNot?: GroupPhotoWhereInput | null
  }

  export type GroupBadgeNullableScalarRelationFilter = {
    is?: GroupBadgeWhereInput | null
    isNot?: GroupBadgeWhereInput | null
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    description?: SortOrder
    goalRep?: SortOrder
    discordWebHookURl?: SortOrder
    discordInviteUrl?: SortOrder
    ownerNickname?: SortOrder
    ownerPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    goalRep?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    description?: SortOrder
    goalRep?: SortOrder
    discordWebHookURl?: SortOrder
    discordInviteUrl?: SortOrder
    ownerNickname?: SortOrder
    ownerPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    groupName?: SortOrder
    description?: SortOrder
    goalRep?: SortOrder
    discordWebHookURl?: SortOrder
    discordInviteUrl?: SortOrder
    ownerNickname?: SortOrder
    ownerPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    goalRep?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type LikeNullableScalarRelationFilter = {
    is?: LikeWhereInput | null
    isNot?: LikeWhereInput | null
  }

  export type ExerciseRecordListRelationFilter = {
    every?: ExerciseRecordWhereInput
    some?: ExerciseRecordWhereInput
    none?: ExerciseRecordWhereInput
  }

  export type ExerciseRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantParticipantInfoCompoundUniqueInput = {
    nickname: string
    password: string
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recordCount?: SortOrder
    recordTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    recordCount?: SortOrder
    recordTime?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recordCount?: SortOrder
    recordTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recordCount?: SortOrder
    recordTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    recordCount?: SortOrder
    recordTime?: SortOrder
  }

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
  }

  export type EnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
  }

  export type ParticipantPhotoListRelationFilter = {
    every?: ParticipantPhotoWhereInput
    some?: ParticipantPhotoWhereInput
    none?: ParticipantPhotoWhereInput
  }

  export type ParticipantPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseRecordCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    exerciseType?: SortOrder
    description?: SortOrder
    time?: SortOrder
    distance?: SortOrder
    participantId?: SortOrder
  }

  export type ExerciseRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    time?: SortOrder
    distance?: SortOrder
    participantId?: SortOrder
  }

  export type ExerciseRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    exerciseType?: SortOrder
    description?: SortOrder
    time?: SortOrder
    distance?: SortOrder
    participantId?: SortOrder
  }

  export type ExerciseRecordMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    exerciseType?: SortOrder
    description?: SortOrder
    time?: SortOrder
    distance?: SortOrder
    participantId?: SortOrder
  }

  export type ExerciseRecordSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    time?: SortOrder
    distance?: SortOrder
    participantId?: SortOrder
  }

  export type EnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
  }

  export type ExerciseRecordScalarRelationFilter = {
    is?: ExerciseRecordWhereInput
    isNot?: ExerciseRecordWhereInput
  }

  export type ParticipantPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseRecordId?: SortOrder
    photoUrl?: SortOrder
  }

  export type ParticipantPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    exerciseRecordId?: SortOrder
  }

  export type ParticipantPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseRecordId?: SortOrder
    photoUrl?: SortOrder
  }

  export type ParticipantPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseRecordId?: SortOrder
    photoUrl?: SortOrder
  }

  export type ParticipantPhotoSumOrderByAggregateInput = {
    id?: SortOrder
    exerciseRecordId?: SortOrder
  }

  export type GroupPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    groupId?: SortOrder
  }

  export type GroupPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type GroupPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    groupId?: SortOrder
  }

  export type GroupPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    groupId?: SortOrder
  }

  export type GroupPhotoSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GroupBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    participantsOver10?: SortOrder
    recordsOver100?: SortOrder
    recommandationsOver100?: SortOrder
  }

  export type GroupBadgeAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type GroupBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    participantsOver10?: SortOrder
    recordsOver100?: SortOrder
    recommandationsOver100?: SortOrder
  }

  export type GroupBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    participantsOver10?: SortOrder
    recordsOver100?: SortOrder
    recommandationsOver100?: SortOrder
  }

  export type GroupBadgeSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type GroupPhotoCreateNestedOneWithoutGroupInput = {
    create?: XOR<GroupPhotoCreateWithoutGroupInput, GroupPhotoUncheckedCreateWithoutGroupInput>
    connectOrCreate?: GroupPhotoCreateOrConnectWithoutGroupInput
    connect?: GroupPhotoWhereUniqueInput
  }

  export type GroupBadgeCreateNestedOneWithoutGroupInput = {
    create?: XOR<GroupBadgeCreateWithoutGroupInput, GroupBadgeUncheckedCreateWithoutGroupInput>
    connectOrCreate?: GroupBadgeCreateOrConnectWithoutGroupInput
    connect?: GroupBadgeWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutGroupInput = {
    create?: XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput> | TagCreateWithoutGroupInput[] | TagUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGroupInput | TagCreateOrConnectWithoutGroupInput[]
    createMany?: TagCreateManyGroupInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ParticipantCreateNestedManyWithoutGroupInput = {
    create?: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput> | ParticipantCreateWithoutGroupInput[] | ParticipantUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupInput | ParticipantCreateOrConnectWithoutGroupInput[]
    createMany?: ParticipantCreateManyGroupInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type GroupPhotoUncheckedCreateNestedOneWithoutGroupInput = {
    create?: XOR<GroupPhotoCreateWithoutGroupInput, GroupPhotoUncheckedCreateWithoutGroupInput>
    connectOrCreate?: GroupPhotoCreateOrConnectWithoutGroupInput
    connect?: GroupPhotoWhereUniqueInput
  }

  export type GroupBadgeUncheckedCreateNestedOneWithoutGroupInput = {
    create?: XOR<GroupBadgeCreateWithoutGroupInput, GroupBadgeUncheckedCreateWithoutGroupInput>
    connectOrCreate?: GroupBadgeCreateOrConnectWithoutGroupInput
    connect?: GroupBadgeWhereUniqueInput
  }

  export type TagUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput> | TagCreateWithoutGroupInput[] | TagUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGroupInput | TagCreateOrConnectWithoutGroupInput[]
    createMany?: TagCreateManyGroupInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput> | ParticipantCreateWithoutGroupInput[] | ParticipantUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupInput | ParticipantCreateOrConnectWithoutGroupInput[]
    createMany?: ParticipantCreateManyGroupInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupPhotoUpdateOneWithoutGroupNestedInput = {
    create?: XOR<GroupPhotoCreateWithoutGroupInput, GroupPhotoUncheckedCreateWithoutGroupInput>
    connectOrCreate?: GroupPhotoCreateOrConnectWithoutGroupInput
    upsert?: GroupPhotoUpsertWithoutGroupInput
    disconnect?: GroupPhotoWhereInput | boolean
    delete?: GroupPhotoWhereInput | boolean
    connect?: GroupPhotoWhereUniqueInput
    update?: XOR<XOR<GroupPhotoUpdateToOneWithWhereWithoutGroupInput, GroupPhotoUpdateWithoutGroupInput>, GroupPhotoUncheckedUpdateWithoutGroupInput>
  }

  export type GroupBadgeUpdateOneWithoutGroupNestedInput = {
    create?: XOR<GroupBadgeCreateWithoutGroupInput, GroupBadgeUncheckedCreateWithoutGroupInput>
    connectOrCreate?: GroupBadgeCreateOrConnectWithoutGroupInput
    upsert?: GroupBadgeUpsertWithoutGroupInput
    disconnect?: GroupBadgeWhereInput | boolean
    delete?: GroupBadgeWhereInput | boolean
    connect?: GroupBadgeWhereUniqueInput
    update?: XOR<XOR<GroupBadgeUpdateToOneWithWhereWithoutGroupInput, GroupBadgeUpdateWithoutGroupInput>, GroupBadgeUncheckedUpdateWithoutGroupInput>
  }

  export type TagUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput> | TagCreateWithoutGroupInput[] | TagUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGroupInput | TagCreateOrConnectWithoutGroupInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutGroupInput | TagUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TagCreateManyGroupInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutGroupInput | TagUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TagUpdateManyWithWhereWithoutGroupInput | TagUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ParticipantUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput> | ParticipantCreateWithoutGroupInput[] | ParticipantUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupInput | ParticipantCreateOrConnectWithoutGroupInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutGroupInput | ParticipantUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ParticipantCreateManyGroupInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutGroupInput | ParticipantUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutGroupInput | ParticipantUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type GroupPhotoUncheckedUpdateOneWithoutGroupNestedInput = {
    create?: XOR<GroupPhotoCreateWithoutGroupInput, GroupPhotoUncheckedCreateWithoutGroupInput>
    connectOrCreate?: GroupPhotoCreateOrConnectWithoutGroupInput
    upsert?: GroupPhotoUpsertWithoutGroupInput
    disconnect?: GroupPhotoWhereInput | boolean
    delete?: GroupPhotoWhereInput | boolean
    connect?: GroupPhotoWhereUniqueInput
    update?: XOR<XOR<GroupPhotoUpdateToOneWithWhereWithoutGroupInput, GroupPhotoUpdateWithoutGroupInput>, GroupPhotoUncheckedUpdateWithoutGroupInput>
  }

  export type GroupBadgeUncheckedUpdateOneWithoutGroupNestedInput = {
    create?: XOR<GroupBadgeCreateWithoutGroupInput, GroupBadgeUncheckedCreateWithoutGroupInput>
    connectOrCreate?: GroupBadgeCreateOrConnectWithoutGroupInput
    upsert?: GroupBadgeUpsertWithoutGroupInput
    disconnect?: GroupBadgeWhereInput | boolean
    delete?: GroupBadgeWhereInput | boolean
    connect?: GroupBadgeWhereUniqueInput
    update?: XOR<XOR<GroupBadgeUpdateToOneWithWhereWithoutGroupInput, GroupBadgeUpdateWithoutGroupInput>, GroupBadgeUncheckedUpdateWithoutGroupInput>
  }

  export type TagUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput> | TagCreateWithoutGroupInput[] | TagUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGroupInput | TagCreateOrConnectWithoutGroupInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutGroupInput | TagUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TagCreateManyGroupInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutGroupInput | TagUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TagUpdateManyWithWhereWithoutGroupInput | TagUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput> | ParticipantCreateWithoutGroupInput[] | ParticipantUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupInput | ParticipantCreateOrConnectWithoutGroupInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutGroupInput | ParticipantUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ParticipantCreateManyGroupInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutGroupInput | ParticipantUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutGroupInput | ParticipantUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutParticipantInput = {
    create?: XOR<GroupCreateWithoutParticipantInput, GroupUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: GroupCreateOrConnectWithoutParticipantInput
    connect?: GroupWhereUniqueInput
  }

  export type LikeCreateNestedOneWithoutParticipantInput = {
    create?: XOR<LikeCreateWithoutParticipantInput, LikeUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: LikeCreateOrConnectWithoutParticipantInput
    connect?: LikeWhereUniqueInput
  }

  export type ExerciseRecordCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ExerciseRecordCreateWithoutParticipantInput, ExerciseRecordUncheckedCreateWithoutParticipantInput> | ExerciseRecordCreateWithoutParticipantInput[] | ExerciseRecordUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutParticipantInput | ExerciseRecordCreateOrConnectWithoutParticipantInput[]
    createMany?: ExerciseRecordCreateManyParticipantInputEnvelope
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedOneWithoutParticipantInput = {
    create?: XOR<LikeCreateWithoutParticipantInput, LikeUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: LikeCreateOrConnectWithoutParticipantInput
    connect?: LikeWhereUniqueInput
  }

  export type ExerciseRecordUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ExerciseRecordCreateWithoutParticipantInput, ExerciseRecordUncheckedCreateWithoutParticipantInput> | ExerciseRecordCreateWithoutParticipantInput[] | ExerciseRecordUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutParticipantInput | ExerciseRecordCreateOrConnectWithoutParticipantInput[]
    createMany?: ExerciseRecordCreateManyParticipantInputEnvelope
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<GroupCreateWithoutParticipantInput, GroupUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: GroupCreateOrConnectWithoutParticipantInput
    upsert?: GroupUpsertWithoutParticipantInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutParticipantInput, GroupUpdateWithoutParticipantInput>, GroupUncheckedUpdateWithoutParticipantInput>
  }

  export type LikeUpdateOneWithoutParticipantNestedInput = {
    create?: XOR<LikeCreateWithoutParticipantInput, LikeUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: LikeCreateOrConnectWithoutParticipantInput
    upsert?: LikeUpsertWithoutParticipantInput
    disconnect?: LikeWhereInput | boolean
    delete?: LikeWhereInput | boolean
    connect?: LikeWhereUniqueInput
    update?: XOR<XOR<LikeUpdateToOneWithWhereWithoutParticipantInput, LikeUpdateWithoutParticipantInput>, LikeUncheckedUpdateWithoutParticipantInput>
  }

  export type ExerciseRecordUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ExerciseRecordCreateWithoutParticipantInput, ExerciseRecordUncheckedCreateWithoutParticipantInput> | ExerciseRecordCreateWithoutParticipantInput[] | ExerciseRecordUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutParticipantInput | ExerciseRecordCreateOrConnectWithoutParticipantInput[]
    upsert?: ExerciseRecordUpsertWithWhereUniqueWithoutParticipantInput | ExerciseRecordUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ExerciseRecordCreateManyParticipantInputEnvelope
    set?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    disconnect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    delete?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    update?: ExerciseRecordUpdateWithWhereUniqueWithoutParticipantInput | ExerciseRecordUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ExerciseRecordUpdateManyWithWhereWithoutParticipantInput | ExerciseRecordUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
  }

  export type LikeUncheckedUpdateOneWithoutParticipantNestedInput = {
    create?: XOR<LikeCreateWithoutParticipantInput, LikeUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: LikeCreateOrConnectWithoutParticipantInput
    upsert?: LikeUpsertWithoutParticipantInput
    disconnect?: LikeWhereInput | boolean
    delete?: LikeWhereInput | boolean
    connect?: LikeWhereUniqueInput
    update?: XOR<XOR<LikeUpdateToOneWithWhereWithoutParticipantInput, LikeUpdateWithoutParticipantInput>, LikeUncheckedUpdateWithoutParticipantInput>
  }

  export type ExerciseRecordUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ExerciseRecordCreateWithoutParticipantInput, ExerciseRecordUncheckedCreateWithoutParticipantInput> | ExerciseRecordCreateWithoutParticipantInput[] | ExerciseRecordUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutParticipantInput | ExerciseRecordCreateOrConnectWithoutParticipantInput[]
    upsert?: ExerciseRecordUpsertWithWhereUniqueWithoutParticipantInput | ExerciseRecordUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ExerciseRecordCreateManyParticipantInputEnvelope
    set?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    disconnect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    delete?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    connect?: ExerciseRecordWhereUniqueInput | ExerciseRecordWhereUniqueInput[]
    update?: ExerciseRecordUpdateWithWhereUniqueWithoutParticipantInput | ExerciseRecordUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ExerciseRecordUpdateManyWithWhereWithoutParticipantInput | ExerciseRecordUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
  }

  export type ParticipantCreateNestedOneWithoutLikeIdInput = {
    create?: XOR<ParticipantCreateWithoutLikeIdInput, ParticipantUncheckedCreateWithoutLikeIdInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutLikeIdInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantUpdateOneRequiredWithoutLikeIdNestedInput = {
    create?: XOR<ParticipantCreateWithoutLikeIdInput, ParticipantUncheckedCreateWithoutLikeIdInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutLikeIdInput
    upsert?: ParticipantUpsertWithoutLikeIdInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutLikeIdInput, ParticipantUpdateWithoutLikeIdInput>, ParticipantUncheckedUpdateWithoutLikeIdInput>
  }

  export type ParticipantCreateNestedOneWithoutExerciseRecordsInput = {
    create?: XOR<ParticipantCreateWithoutExerciseRecordsInput, ParticipantUncheckedCreateWithoutExerciseRecordsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutExerciseRecordsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantPhotoCreateNestedManyWithoutExerciseRecordInput = {
    create?: XOR<ParticipantPhotoCreateWithoutExerciseRecordInput, ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput> | ParticipantPhotoCreateWithoutExerciseRecordInput[] | ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput[]
    connectOrCreate?: ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput | ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput[]
    createMany?: ParticipantPhotoCreateManyExerciseRecordInputEnvelope
    connect?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
  }

  export type ParticipantPhotoUncheckedCreateNestedManyWithoutExerciseRecordInput = {
    create?: XOR<ParticipantPhotoCreateWithoutExerciseRecordInput, ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput> | ParticipantPhotoCreateWithoutExerciseRecordInput[] | ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput[]
    connectOrCreate?: ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput | ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput[]
    createMany?: ParticipantPhotoCreateManyExerciseRecordInputEnvelope
    connect?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
  }

  export type EnumExerciseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExerciseType
  }

  export type ParticipantUpdateOneRequiredWithoutExerciseRecordsNestedInput = {
    create?: XOR<ParticipantCreateWithoutExerciseRecordsInput, ParticipantUncheckedCreateWithoutExerciseRecordsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutExerciseRecordsInput
    upsert?: ParticipantUpsertWithoutExerciseRecordsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutExerciseRecordsInput, ParticipantUpdateWithoutExerciseRecordsInput>, ParticipantUncheckedUpdateWithoutExerciseRecordsInput>
  }

  export type ParticipantPhotoUpdateManyWithoutExerciseRecordNestedInput = {
    create?: XOR<ParticipantPhotoCreateWithoutExerciseRecordInput, ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput> | ParticipantPhotoCreateWithoutExerciseRecordInput[] | ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput[]
    connectOrCreate?: ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput | ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput[]
    upsert?: ParticipantPhotoUpsertWithWhereUniqueWithoutExerciseRecordInput | ParticipantPhotoUpsertWithWhereUniqueWithoutExerciseRecordInput[]
    createMany?: ParticipantPhotoCreateManyExerciseRecordInputEnvelope
    set?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
    disconnect?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
    delete?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
    connect?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
    update?: ParticipantPhotoUpdateWithWhereUniqueWithoutExerciseRecordInput | ParticipantPhotoUpdateWithWhereUniqueWithoutExerciseRecordInput[]
    updateMany?: ParticipantPhotoUpdateManyWithWhereWithoutExerciseRecordInput | ParticipantPhotoUpdateManyWithWhereWithoutExerciseRecordInput[]
    deleteMany?: ParticipantPhotoScalarWhereInput | ParticipantPhotoScalarWhereInput[]
  }

  export type ParticipantPhotoUncheckedUpdateManyWithoutExerciseRecordNestedInput = {
    create?: XOR<ParticipantPhotoCreateWithoutExerciseRecordInput, ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput> | ParticipantPhotoCreateWithoutExerciseRecordInput[] | ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput[]
    connectOrCreate?: ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput | ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput[]
    upsert?: ParticipantPhotoUpsertWithWhereUniqueWithoutExerciseRecordInput | ParticipantPhotoUpsertWithWhereUniqueWithoutExerciseRecordInput[]
    createMany?: ParticipantPhotoCreateManyExerciseRecordInputEnvelope
    set?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
    disconnect?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
    delete?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
    connect?: ParticipantPhotoWhereUniqueInput | ParticipantPhotoWhereUniqueInput[]
    update?: ParticipantPhotoUpdateWithWhereUniqueWithoutExerciseRecordInput | ParticipantPhotoUpdateWithWhereUniqueWithoutExerciseRecordInput[]
    updateMany?: ParticipantPhotoUpdateManyWithWhereWithoutExerciseRecordInput | ParticipantPhotoUpdateManyWithWhereWithoutExerciseRecordInput[]
    deleteMany?: ParticipantPhotoScalarWhereInput | ParticipantPhotoScalarWhereInput[]
  }

  export type ExerciseRecordCreateNestedOneWithoutParticipantPhotoInput = {
    create?: XOR<ExerciseRecordCreateWithoutParticipantPhotoInput, ExerciseRecordUncheckedCreateWithoutParticipantPhotoInput>
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutParticipantPhotoInput
    connect?: ExerciseRecordWhereUniqueInput
  }

  export type ExerciseRecordUpdateOneRequiredWithoutParticipantPhotoNestedInput = {
    create?: XOR<ExerciseRecordCreateWithoutParticipantPhotoInput, ExerciseRecordUncheckedCreateWithoutParticipantPhotoInput>
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutParticipantPhotoInput
    upsert?: ExerciseRecordUpsertWithoutParticipantPhotoInput
    connect?: ExerciseRecordWhereUniqueInput
    update?: XOR<XOR<ExerciseRecordUpdateToOneWithWhereWithoutParticipantPhotoInput, ExerciseRecordUpdateWithoutParticipantPhotoInput>, ExerciseRecordUncheckedUpdateWithoutParticipantPhotoInput>
  }

  export type GroupCreateNestedOneWithoutGroupPhotoInput = {
    create?: XOR<GroupCreateWithoutGroupPhotoInput, GroupUncheckedCreateWithoutGroupPhotoInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupPhotoInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutGroupPhotoNestedInput = {
    create?: XOR<GroupCreateWithoutGroupPhotoInput, GroupUncheckedCreateWithoutGroupPhotoInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupPhotoInput
    upsert?: GroupUpsertWithoutGroupPhotoInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutGroupPhotoInput, GroupUpdateWithoutGroupPhotoInput>, GroupUncheckedUpdateWithoutGroupPhotoInput>
  }

  export type GroupCreateNestedOneWithoutGroupBadgeInput = {
    create?: XOR<GroupCreateWithoutGroupBadgeInput, GroupUncheckedCreateWithoutGroupBadgeInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupBadgeInput
    connect?: GroupWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GroupUpdateOneRequiredWithoutGroupBadgeNestedInput = {
    create?: XOR<GroupCreateWithoutGroupBadgeInput, GroupUncheckedCreateWithoutGroupBadgeInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupBadgeInput
    upsert?: GroupUpsertWithoutGroupBadgeInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutGroupBadgeInput, GroupUpdateWithoutGroupBadgeInput>, GroupUncheckedUpdateWithoutGroupBadgeInput>
  }

  export type GroupCreateNestedOneWithoutTagInput = {
    create?: XOR<GroupCreateWithoutTagInput, GroupUncheckedCreateWithoutTagInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTagInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutTagNestedInput = {
    create?: XOR<GroupCreateWithoutTagInput, GroupUncheckedCreateWithoutTagInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTagInput
    upsert?: GroupUpsertWithoutTagInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutTagInput, GroupUpdateWithoutTagInput>, GroupUncheckedUpdateWithoutTagInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
  }

  export type NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroupPhotoCreateWithoutGroupInput = {
    id: number
    photoUrl: string
  }

  export type GroupPhotoUncheckedCreateWithoutGroupInput = {
    id: number
    photoUrl: string
  }

  export type GroupPhotoCreateOrConnectWithoutGroupInput = {
    where: GroupPhotoWhereUniqueInput
    create: XOR<GroupPhotoCreateWithoutGroupInput, GroupPhotoUncheckedCreateWithoutGroupInput>
  }

  export type GroupBadgeCreateWithoutGroupInput = {
    id: number
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
  }

  export type GroupBadgeUncheckedCreateWithoutGroupInput = {
    id: number
    participantsOver10?: boolean
    recordsOver100?: boolean
    recommandationsOver100?: boolean
  }

  export type GroupBadgeCreateOrConnectWithoutGroupInput = {
    where: GroupBadgeWhereUniqueInput
    create: XOR<GroupBadgeCreateWithoutGroupInput, GroupBadgeUncheckedCreateWithoutGroupInput>
  }

  export type TagCreateWithoutGroupInput = {
    id: number
    tagName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutGroupInput = {
    id: number
    tagName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutGroupInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput>
  }

  export type TagCreateManyGroupInputEnvelope = {
    data: TagCreateManyGroupInput | TagCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantCreateWithoutGroupInput = {
    id: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likeId?: LikeCreateNestedOneWithoutParticipantInput
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutGroupInput = {
    id: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likeId?: LikeUncheckedCreateNestedOneWithoutParticipantInput
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutGroupInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput>
  }

  export type ParticipantCreateManyGroupInputEnvelope = {
    data: ParticipantCreateManyGroupInput | ParticipantCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupPhotoUpsertWithoutGroupInput = {
    update: XOR<GroupPhotoUpdateWithoutGroupInput, GroupPhotoUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupPhotoCreateWithoutGroupInput, GroupPhotoUncheckedCreateWithoutGroupInput>
    where?: GroupPhotoWhereInput
  }

  export type GroupPhotoUpdateToOneWithWhereWithoutGroupInput = {
    where?: GroupPhotoWhereInput
    data: XOR<GroupPhotoUpdateWithoutGroupInput, GroupPhotoUncheckedUpdateWithoutGroupInput>
  }

  export type GroupPhotoUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type GroupPhotoUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type GroupBadgeUpsertWithoutGroupInput = {
    update: XOR<GroupBadgeUpdateWithoutGroupInput, GroupBadgeUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupBadgeCreateWithoutGroupInput, GroupBadgeUncheckedCreateWithoutGroupInput>
    where?: GroupBadgeWhereInput
  }

  export type GroupBadgeUpdateToOneWithWhereWithoutGroupInput = {
    where?: GroupBadgeWhereInput
    data: XOR<GroupBadgeUpdateWithoutGroupInput, GroupBadgeUncheckedUpdateWithoutGroupInput>
  }

  export type GroupBadgeUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantsOver10?: BoolFieldUpdateOperationsInput | boolean
    recordsOver100?: BoolFieldUpdateOperationsInput | boolean
    recommandationsOver100?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupBadgeUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantsOver10?: BoolFieldUpdateOperationsInput | boolean
    recordsOver100?: BoolFieldUpdateOperationsInput | boolean
    recommandationsOver100?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagUpsertWithWhereUniqueWithoutGroupInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutGroupInput, TagUncheckedUpdateWithoutGroupInput>
    create: XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput>
  }

  export type TagUpdateWithWhereUniqueWithoutGroupInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutGroupInput, TagUncheckedUpdateWithoutGroupInput>
  }

  export type TagUpdateManyWithWhereWithoutGroupInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutGroupInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    tagName?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    groupId?: IntFilter<"Tag"> | number
  }

  export type ParticipantUpsertWithWhereUniqueWithoutGroupInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutGroupInput, ParticipantUncheckedUpdateWithoutGroupInput>
    create: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutGroupInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutGroupInput, ParticipantUncheckedUpdateWithoutGroupInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutGroupInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutGroupInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    id?: IntFilter<"Participant"> | number
    groupId?: IntFilter<"Participant"> | number
    nickname?: StringFilter<"Participant"> | string
    password?: StringFilter<"Participant"> | string
    recordCount?: IntFilter<"Participant"> | number
    recordTime?: IntFilter<"Participant"> | number
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
  }

  export type GroupCreateWithoutParticipantInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPhoto?: GroupPhotoCreateNestedOneWithoutGroupInput
    groupBadge?: GroupBadgeCreateNestedOneWithoutGroupInput
    tag?: TagCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutParticipantInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPhoto?: GroupPhotoUncheckedCreateNestedOneWithoutGroupInput
    groupBadge?: GroupBadgeUncheckedCreateNestedOneWithoutGroupInput
    tag?: TagUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutParticipantInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutParticipantInput, GroupUncheckedCreateWithoutParticipantInput>
  }

  export type LikeCreateWithoutParticipantInput = {
    id: number
  }

  export type LikeUncheckedCreateWithoutParticipantInput = {
    id: number
  }

  export type LikeCreateOrConnectWithoutParticipantInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutParticipantInput, LikeUncheckedCreateWithoutParticipantInput>
  }

  export type ExerciseRecordCreateWithoutParticipantInput = {
    id: number
    groupId: number
    exerciseType?: $Enums.ExerciseType
    description: string
    time?: number
    distance?: number
    participantPhoto?: ParticipantPhotoCreateNestedManyWithoutExerciseRecordInput
  }

  export type ExerciseRecordUncheckedCreateWithoutParticipantInput = {
    id: number
    groupId: number
    exerciseType?: $Enums.ExerciseType
    description: string
    time?: number
    distance?: number
    participantPhoto?: ParticipantPhotoUncheckedCreateNestedManyWithoutExerciseRecordInput
  }

  export type ExerciseRecordCreateOrConnectWithoutParticipantInput = {
    where: ExerciseRecordWhereUniqueInput
    create: XOR<ExerciseRecordCreateWithoutParticipantInput, ExerciseRecordUncheckedCreateWithoutParticipantInput>
  }

  export type ExerciseRecordCreateManyParticipantInputEnvelope = {
    data: ExerciseRecordCreateManyParticipantInput | ExerciseRecordCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutParticipantInput = {
    update: XOR<GroupUpdateWithoutParticipantInput, GroupUncheckedUpdateWithoutParticipantInput>
    create: XOR<GroupCreateWithoutParticipantInput, GroupUncheckedCreateWithoutParticipantInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutParticipantInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutParticipantInput, GroupUncheckedUpdateWithoutParticipantInput>
  }

  export type GroupUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPhoto?: GroupPhotoUpdateOneWithoutGroupNestedInput
    groupBadge?: GroupBadgeUpdateOneWithoutGroupNestedInput
    tag?: TagUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPhoto?: GroupPhotoUncheckedUpdateOneWithoutGroupNestedInput
    groupBadge?: GroupBadgeUncheckedUpdateOneWithoutGroupNestedInput
    tag?: TagUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type LikeUpsertWithoutParticipantInput = {
    update: XOR<LikeUpdateWithoutParticipantInput, LikeUncheckedUpdateWithoutParticipantInput>
    create: XOR<LikeCreateWithoutParticipantInput, LikeUncheckedCreateWithoutParticipantInput>
    where?: LikeWhereInput
  }

  export type LikeUpdateToOneWithWhereWithoutParticipantInput = {
    where?: LikeWhereInput
    data: XOR<LikeUpdateWithoutParticipantInput, LikeUncheckedUpdateWithoutParticipantInput>
  }

  export type LikeUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type LikeUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseRecordUpsertWithWhereUniqueWithoutParticipantInput = {
    where: ExerciseRecordWhereUniqueInput
    update: XOR<ExerciseRecordUpdateWithoutParticipantInput, ExerciseRecordUncheckedUpdateWithoutParticipantInput>
    create: XOR<ExerciseRecordCreateWithoutParticipantInput, ExerciseRecordUncheckedCreateWithoutParticipantInput>
  }

  export type ExerciseRecordUpdateWithWhereUniqueWithoutParticipantInput = {
    where: ExerciseRecordWhereUniqueInput
    data: XOR<ExerciseRecordUpdateWithoutParticipantInput, ExerciseRecordUncheckedUpdateWithoutParticipantInput>
  }

  export type ExerciseRecordUpdateManyWithWhereWithoutParticipantInput = {
    where: ExerciseRecordScalarWhereInput
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyWithoutParticipantInput>
  }

  export type ExerciseRecordScalarWhereInput = {
    AND?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
    OR?: ExerciseRecordScalarWhereInput[]
    NOT?: ExerciseRecordScalarWhereInput | ExerciseRecordScalarWhereInput[]
    id?: IntFilter<"ExerciseRecord"> | number
    groupId?: IntFilter<"ExerciseRecord"> | number
    exerciseType?: EnumExerciseTypeFilter<"ExerciseRecord"> | $Enums.ExerciseType
    description?: StringFilter<"ExerciseRecord"> | string
    time?: IntFilter<"ExerciseRecord"> | number
    distance?: IntFilter<"ExerciseRecord"> | number
    participantId?: IntFilter<"ExerciseRecord"> | number
  }

  export type ParticipantCreateWithoutLikeIdInput = {
    id: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutParticipantInput
    exerciseRecords?: ExerciseRecordCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutLikeIdInput = {
    id: number
    groupId: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    exerciseRecords?: ExerciseRecordUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutLikeIdInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutLikeIdInput, ParticipantUncheckedCreateWithoutLikeIdInput>
  }

  export type ParticipantUpsertWithoutLikeIdInput = {
    update: XOR<ParticipantUpdateWithoutLikeIdInput, ParticipantUncheckedUpdateWithoutLikeIdInput>
    create: XOR<ParticipantCreateWithoutLikeIdInput, ParticipantUncheckedCreateWithoutLikeIdInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutLikeIdInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutLikeIdInput, ParticipantUncheckedUpdateWithoutLikeIdInput>
  }

  export type ParticipantUpdateWithoutLikeIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutParticipantNestedInput
    exerciseRecords?: ExerciseRecordUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutLikeIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateWithoutExerciseRecordsInput = {
    id: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutParticipantInput
    likeId?: LikeCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutExerciseRecordsInput = {
    id: number
    groupId: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likeId?: LikeUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutExerciseRecordsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutExerciseRecordsInput, ParticipantUncheckedCreateWithoutExerciseRecordsInput>
  }

  export type ParticipantPhotoCreateWithoutExerciseRecordInput = {
    id: number
    photoUrl: string
  }

  export type ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput = {
    id: number
    photoUrl: string
  }

  export type ParticipantPhotoCreateOrConnectWithoutExerciseRecordInput = {
    where: ParticipantPhotoWhereUniqueInput
    create: XOR<ParticipantPhotoCreateWithoutExerciseRecordInput, ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput>
  }

  export type ParticipantPhotoCreateManyExerciseRecordInputEnvelope = {
    data: ParticipantPhotoCreateManyExerciseRecordInput | ParticipantPhotoCreateManyExerciseRecordInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantUpsertWithoutExerciseRecordsInput = {
    update: XOR<ParticipantUpdateWithoutExerciseRecordsInput, ParticipantUncheckedUpdateWithoutExerciseRecordsInput>
    create: XOR<ParticipantCreateWithoutExerciseRecordsInput, ParticipantUncheckedCreateWithoutExerciseRecordsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutExerciseRecordsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutExerciseRecordsInput, ParticipantUncheckedUpdateWithoutExerciseRecordsInput>
  }

  export type ParticipantUpdateWithoutExerciseRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutParticipantNestedInput
    likeId?: LikeUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutExerciseRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeId?: LikeUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantPhotoUpsertWithWhereUniqueWithoutExerciseRecordInput = {
    where: ParticipantPhotoWhereUniqueInput
    update: XOR<ParticipantPhotoUpdateWithoutExerciseRecordInput, ParticipantPhotoUncheckedUpdateWithoutExerciseRecordInput>
    create: XOR<ParticipantPhotoCreateWithoutExerciseRecordInput, ParticipantPhotoUncheckedCreateWithoutExerciseRecordInput>
  }

  export type ParticipantPhotoUpdateWithWhereUniqueWithoutExerciseRecordInput = {
    where: ParticipantPhotoWhereUniqueInput
    data: XOR<ParticipantPhotoUpdateWithoutExerciseRecordInput, ParticipantPhotoUncheckedUpdateWithoutExerciseRecordInput>
  }

  export type ParticipantPhotoUpdateManyWithWhereWithoutExerciseRecordInput = {
    where: ParticipantPhotoScalarWhereInput
    data: XOR<ParticipantPhotoUpdateManyMutationInput, ParticipantPhotoUncheckedUpdateManyWithoutExerciseRecordInput>
  }

  export type ParticipantPhotoScalarWhereInput = {
    AND?: ParticipantPhotoScalarWhereInput | ParticipantPhotoScalarWhereInput[]
    OR?: ParticipantPhotoScalarWhereInput[]
    NOT?: ParticipantPhotoScalarWhereInput | ParticipantPhotoScalarWhereInput[]
    id?: IntFilter<"ParticipantPhoto"> | number
    exerciseRecordId?: IntFilter<"ParticipantPhoto"> | number
    photoUrl?: StringFilter<"ParticipantPhoto"> | string
  }

  export type ExerciseRecordCreateWithoutParticipantPhotoInput = {
    id: number
    groupId: number
    exerciseType?: $Enums.ExerciseType
    description: string
    time?: number
    distance?: number
    participant: ParticipantCreateNestedOneWithoutExerciseRecordsInput
  }

  export type ExerciseRecordUncheckedCreateWithoutParticipantPhotoInput = {
    id: number
    groupId: number
    exerciseType?: $Enums.ExerciseType
    description: string
    time?: number
    distance?: number
    participantId: number
  }

  export type ExerciseRecordCreateOrConnectWithoutParticipantPhotoInput = {
    where: ExerciseRecordWhereUniqueInput
    create: XOR<ExerciseRecordCreateWithoutParticipantPhotoInput, ExerciseRecordUncheckedCreateWithoutParticipantPhotoInput>
  }

  export type ExerciseRecordUpsertWithoutParticipantPhotoInput = {
    update: XOR<ExerciseRecordUpdateWithoutParticipantPhotoInput, ExerciseRecordUncheckedUpdateWithoutParticipantPhotoInput>
    create: XOR<ExerciseRecordCreateWithoutParticipantPhotoInput, ExerciseRecordUncheckedCreateWithoutParticipantPhotoInput>
    where?: ExerciseRecordWhereInput
  }

  export type ExerciseRecordUpdateToOneWithWhereWithoutParticipantPhotoInput = {
    where?: ExerciseRecordWhereInput
    data: XOR<ExerciseRecordUpdateWithoutParticipantPhotoInput, ExerciseRecordUncheckedUpdateWithoutParticipantPhotoInput>
  }

  export type ExerciseRecordUpdateWithoutParticipantPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    participant?: ParticipantUpdateOneRequiredWithoutExerciseRecordsNestedInput
  }

  export type ExerciseRecordUncheckedUpdateWithoutParticipantPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupCreateWithoutGroupPhotoInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupBadge?: GroupBadgeCreateNestedOneWithoutGroupInput
    tag?: TagCreateNestedManyWithoutGroupInput
    participant?: ParticipantCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutGroupPhotoInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupBadge?: GroupBadgeUncheckedCreateNestedOneWithoutGroupInput
    tag?: TagUncheckedCreateNestedManyWithoutGroupInput
    participant?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutGroupPhotoInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutGroupPhotoInput, GroupUncheckedCreateWithoutGroupPhotoInput>
  }

  export type GroupUpsertWithoutGroupPhotoInput = {
    update: XOR<GroupUpdateWithoutGroupPhotoInput, GroupUncheckedUpdateWithoutGroupPhotoInput>
    create: XOR<GroupCreateWithoutGroupPhotoInput, GroupUncheckedCreateWithoutGroupPhotoInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutGroupPhotoInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutGroupPhotoInput, GroupUncheckedUpdateWithoutGroupPhotoInput>
  }

  export type GroupUpdateWithoutGroupPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupBadge?: GroupBadgeUpdateOneWithoutGroupNestedInput
    tag?: TagUpdateManyWithoutGroupNestedInput
    participant?: ParticipantUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutGroupPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupBadge?: GroupBadgeUncheckedUpdateOneWithoutGroupNestedInput
    tag?: TagUncheckedUpdateManyWithoutGroupNestedInput
    participant?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutGroupBadgeInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPhoto?: GroupPhotoCreateNestedOneWithoutGroupInput
    tag?: TagCreateNestedManyWithoutGroupInput
    participant?: ParticipantCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutGroupBadgeInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPhoto?: GroupPhotoUncheckedCreateNestedOneWithoutGroupInput
    tag?: TagUncheckedCreateNestedManyWithoutGroupInput
    participant?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutGroupBadgeInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutGroupBadgeInput, GroupUncheckedCreateWithoutGroupBadgeInput>
  }

  export type GroupUpsertWithoutGroupBadgeInput = {
    update: XOR<GroupUpdateWithoutGroupBadgeInput, GroupUncheckedUpdateWithoutGroupBadgeInput>
    create: XOR<GroupCreateWithoutGroupBadgeInput, GroupUncheckedCreateWithoutGroupBadgeInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutGroupBadgeInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutGroupBadgeInput, GroupUncheckedUpdateWithoutGroupBadgeInput>
  }

  export type GroupUpdateWithoutGroupBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPhoto?: GroupPhotoUpdateOneWithoutGroupNestedInput
    tag?: TagUpdateManyWithoutGroupNestedInput
    participant?: ParticipantUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutGroupBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPhoto?: GroupPhotoUncheckedUpdateOneWithoutGroupNestedInput
    tag?: TagUncheckedUpdateManyWithoutGroupNestedInput
    participant?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutTagInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPhoto?: GroupPhotoCreateNestedOneWithoutGroupInput
    groupBadge?: GroupBadgeCreateNestedOneWithoutGroupInput
    participant?: ParticipantCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTagInput = {
    id: number
    groupName: string
    description?: string | null
    goalRep?: number
    discordWebHookURl: string
    discordInviteUrl: string
    ownerNickname: string
    ownerPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPhoto?: GroupPhotoUncheckedCreateNestedOneWithoutGroupInput
    groupBadge?: GroupBadgeUncheckedCreateNestedOneWithoutGroupInput
    participant?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTagInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTagInput, GroupUncheckedCreateWithoutTagInput>
  }

  export type GroupUpsertWithoutTagInput = {
    update: XOR<GroupUpdateWithoutTagInput, GroupUncheckedUpdateWithoutTagInput>
    create: XOR<GroupCreateWithoutTagInput, GroupUncheckedCreateWithoutTagInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutTagInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutTagInput, GroupUncheckedUpdateWithoutTagInput>
  }

  export type GroupUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPhoto?: GroupPhotoUpdateOneWithoutGroupNestedInput
    groupBadge?: GroupBadgeUpdateOneWithoutGroupNestedInput
    participant?: ParticipantUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goalRep?: IntFieldUpdateOperationsInput | number
    discordWebHookURl?: StringFieldUpdateOperationsInput | string
    discordInviteUrl?: StringFieldUpdateOperationsInput | string
    ownerNickname?: StringFieldUpdateOperationsInput | string
    ownerPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPhoto?: GroupPhotoUncheckedUpdateOneWithoutGroupNestedInput
    groupBadge?: GroupBadgeUncheckedUpdateOneWithoutGroupNestedInput
    participant?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TagCreateManyGroupInput = {
    id: number
    tagName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateManyGroupInput = {
    id: number
    nickname: string
    password: string
    recordCount?: number
    recordTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeId?: LikeUpdateOneWithoutParticipantNestedInput
    exerciseRecords?: ExerciseRecordUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeId?: LikeUncheckedUpdateOneWithoutParticipantNestedInput
    exerciseRecords?: ExerciseRecordUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recordCount?: IntFieldUpdateOperationsInput | number
    recordTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseRecordCreateManyParticipantInput = {
    id: number
    groupId: number
    exerciseType?: $Enums.ExerciseType
    description: string
    time?: number
    distance?: number
  }

  export type ExerciseRecordUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    participantPhoto?: ParticipantPhotoUpdateManyWithoutExerciseRecordNestedInput
  }

  export type ExerciseRecordUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    participantPhoto?: ParticipantPhotoUncheckedUpdateManyWithoutExerciseRecordNestedInput
  }

  export type ExerciseRecordUncheckedUpdateManyWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    exerciseType?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantPhotoCreateManyExerciseRecordInput = {
    id: number
    photoUrl: string
  }

  export type ParticipantPhotoUpdateWithoutExerciseRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantPhotoUncheckedUpdateWithoutExerciseRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantPhotoUncheckedUpdateManyWithoutExerciseRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
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