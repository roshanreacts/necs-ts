declare function createTrpcServer(): import("@trpc/server").CreateRouterInner<
  import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
  }>,
  {
    Query: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
      ctx: object;
      meta: object;
      errorShape: import("@trpc/server").DefaultErrorShape;
      transformer: import("@trpc/server").DefaultDataTransformer;
  }>, {
      getUser: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    where: {
        id?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        name?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        account?: {
            is?: string | undefined;
            isNot?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        test?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        accPass?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        createdOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        updatedOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
    };
}
        ;
        _input_out: {
    where: {
        id?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        name?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        account?: {
            is?: string | undefined;
            isNot?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        test?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        accPass?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        createdOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        updatedOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
    };
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
listUsers: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    where?: {
        id?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        name?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        account?: {
            is?: string | undefined;
            isNot?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        test?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        accPass?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        createdOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        updatedOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
    } | undefined;
    sort?: {
        name?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        test?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        accPass?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        createdOn?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        updatedOn?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
    } | undefined;
    offset?: number;
    limit?: number;
}
        ;
        _input_out: {
    where?: {
        id?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        name?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        account?: {
            is?: string | undefined;
            isNot?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        test?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        accPass?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        createdOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        updatedOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
    } | undefined;
    sort?: {
        name?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        test?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        accPass?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        createdOn?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        updatedOn?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
    } | undefined;
    offset?: number;
    limit?: number;
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
getAccount: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    where: {
        id?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        name?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        user?: {
            is?: string | undefined;
            isNot?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        createdOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        updatedOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
    };
}
        ;
        _input_out: {
    where: {
        id?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        name?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        user?: {
            is?: string | undefined;
            isNot?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        createdOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        updatedOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
    };
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
listAccounts: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    where?: {
        id?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        name?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        user?: {
            is?: string | undefined;
            isNot?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        createdOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        updatedOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
    } | undefined;
    sort?: {
        name?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        createdOn?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        updatedOn?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
    } | undefined;
    offset?: number;
    limit?: number;
}
        ;
        _input_out: {
    where?: {
        id?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        name?: {
            is?: string | undefined;
            isNot?: string | undefined;
            contains?: string | undefined;
            notContains?: string | undefined;
            startsWith?: string | undefined;
            notStartWith?: string | undefined;
            endsWith?: string | undefined;
            notEndsWith?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        user?: {
            is?: string | undefined;
            isNot?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        createdOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
        updatedOn?: {
            is?: string | undefined;
            isNot?: string | undefined;
            lt?: string | undefined;
            lte?: string | undefined;
            gt?: string | undefined;
            gte?: string | undefined;
            in?: (string | undefined)[] | undefined;
            notIn?: (string | undefined)[] | undefined;
        } | undefined;
    } | undefined;
    sort?: {
        name?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        createdOn?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
        updatedOn?: {
            sort?: ("asc" | "desc") | undefined;
        } | undefined;
    } | undefined;
    offset?: number;
    limit?: number;
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
hello: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    name: string;
}
        ;
        _input_out: {
    name: string;
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>
  }>
    ;
Mutation: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
      ctx: object;
      meta: object;
      errorShape: import("@trpc/server").DefaultErrorShape;
      transformer: import("@trpc/server").DefaultDataTransformer;
  }>, {
      createUser: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    input: {
        name?: string | undefined;
        account?: string | undefined;
        test: string;
        accPass?: string | undefined;
    };
}
        ;
        _input_out: {
    input: {
        name?: string | undefined;
        account?: string | undefined;
        test: string;
        accPass?: string | undefined;
    };
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
createUsers: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    input: {
        name?: string | undefined;
        account?: string | undefined;
        test: string;
        accPass?: string | undefined;
    }[];
}
        ;
        _input_out: {
    input: {
        name?: string | undefined;
        account?: string | undefined;
        test: string;
        accPass?: string | undefined;
    }[];
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
updateUser: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    input: {
        id: string;
        name?: string | undefined;
        account?: string | undefined;
        test?: string | undefined;
        accPass?: string | undefined;
    };
}
        ;
        _input_out: {
    input: {
        id: string;
        name?: string | undefined;
        account?: string | undefined;
        test?: string | undefined;
        accPass?: string | undefined;
    };
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
updateUsers: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    input: {
        id: string;
        name?: string | undefined;
        account?: string | undefined;
        test?: string | undefined;
        accPass?: string | undefined;
    }[];
}
        ;
        _input_out: {
    input: {
        id: string;
        name?: string | undefined;
        account?: string | undefined;
        test?: string | undefined;
        accPass?: string | undefined;
    }[];
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
deleteUser: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    id: string;
}
        ;
        _input_out: {
    id: string;
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
deleteUsers: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    ids?: string[] | undefined;
}
        ;
        _input_out: {
    ids?: string[] | undefined;
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
createAccount: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    input: {
        name?: string | undefined;
        user?: string | undefined;
    };
}
        ;
        _input_out: {
    input: {
        name?: string | undefined;
        user?: string | undefined;
    };
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
createAccounts: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    input: {
        name?: string | undefined;
        user?: string | undefined;
    }[];
}
        ;
        _input_out: {
    input: {
        name?: string | undefined;
        user?: string | undefined;
    }[];
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
updateAccount: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    input: {
        id: string;
        name?: string | undefined;
        user?: string | undefined;
    };
}
        ;
        _input_out: {
    input: {
        id: string;
        name?: string | undefined;
        user?: string | undefined;
    };
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
updateAccounts: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    input: {
        id: string;
        name?: string | undefined;
        user?: string | undefined;
    }[];
}
        ;
        _input_out: {
    input: {
        id: string;
        name?: string | undefined;
        user?: string | undefined;
    }[];
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
deleteAccount: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    id: string;
}
        ;
        _input_out: {
    id: string;
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>;
deleteAccounts: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
    ids?: string[] | undefined;
}
        ;
        _input_out: {
    ids?: string[] | undefined;
}
        ;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, any>
  }>
    
  }
>;

export type AppRouter = ReturnType<typeof createTrpcServer>;
