import { z } from "zod";
export declare const sessions: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "sessions";
    schema: undefined;
    columns: {
        sid: import("drizzle-orm/pg-core").PgColumn<{
            name: "sid";
            tableName: "sessions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        sess: import("drizzle-orm/pg-core").PgColumn<{
            name: "sess";
            tableName: "sessions";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        expire: import("drizzle-orm/pg-core").PgColumn<{
            name: "expire";
            tableName: "sessions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const users: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        email: import("drizzle-orm/pg-core").PgColumn<{
            name: "email";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        firstName: import("drizzle-orm/pg-core").PgColumn<{
            name: "first_name";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        lastName: import("drizzle-orm/pg-core").PgColumn<{
            name: "last_name";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        profileImageUrl: import("drizzle-orm/pg-core").PgColumn<{
            name: "profile_image_url";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        primaryLanguage: import("drizzle-orm/pg-core").PgColumn<{
            name: "primary_language";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        location: import("drizzle-orm/pg-core").PgColumn<{
            name: "location";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        password: import("drizzle-orm/pg-core").PgColumn<{
            name: "password";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        googleId: import("drizzle-orm/pg-core").PgColumn<{
            name: "google_id";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        emailVerified: import("drizzle-orm/pg-core").PgColumn<{
            name: "email_verified";
            tableName: "users";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "users";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "users";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const conversations: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "conversations";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "conversations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        user1Id: import("drizzle-orm/pg-core").PgColumn<{
            name: "user1_id";
            tableName: "conversations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        user2Id: import("drizzle-orm/pg-core").PgColumn<{
            name: "user2_id";
            tableName: "conversations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        user1Language: import("drizzle-orm/pg-core").PgColumn<{
            name: "user1_language";
            tableName: "conversations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        user2Language: import("drizzle-orm/pg-core").PgColumn<{
            name: "user2_language";
            tableName: "conversations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        status: import("drizzle-orm/pg-core").PgColumn<{
            name: "status";
            tableName: "conversations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "conversations";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "conversations";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const messages: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "messages";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        conversationId: import("drizzle-orm/pg-core").PgColumn<{
            name: "conversation_id";
            tableName: "messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        senderId: import("drizzle-orm/pg-core").PgColumn<{
            name: "sender_id";
            tableName: "messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        originalText: import("drizzle-orm/pg-core").PgColumn<{
            name: "original_text";
            tableName: "messages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        translatedText: import("drizzle-orm/pg-core").PgColumn<{
            name: "translated_text";
            tableName: "messages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        originalLanguage: import("drizzle-orm/pg-core").PgColumn<{
            name: "original_language";
            tableName: "messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        targetLanguage: import("drizzle-orm/pg-core").PgColumn<{
            name: "target_language";
            tableName: "messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        audioUrl: import("drizzle-orm/pg-core").PgColumn<{
            name: "audio_url";
            tableName: "messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "messages";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const aiChats: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "ai_chats";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "ai_chats";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        userId: import("drizzle-orm/pg-core").PgColumn<{
            name: "user_id";
            tableName: "ai_chats";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        messages: import("drizzle-orm/pg-core").PgColumn<{
            name: "messages";
            tableName: "ai_chats";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        location: import("drizzle-orm/pg-core").PgColumn<{
            name: "location";
            tableName: "ai_chats";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        language: import("drizzle-orm/pg-core").PgColumn<{
            name: "language";
            tableName: "ai_chats";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "ai_chats";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "ai_chats";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const subscriptions: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "subscriptions";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        userId: import("drizzle-orm/pg-core").PgColumn<{
            name: "user_id";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        planId: import("drizzle-orm/pg-core").PgColumn<{
            name: "plan_id";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        status: import("drizzle-orm/pg-core").PgColumn<{
            name: "status";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        startDate: import("drizzle-orm/pg-core").PgColumn<{
            name: "start_date";
            tableName: "subscriptions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        endDate: import("drizzle-orm/pg-core").PgColumn<{
            name: "end_date";
            tableName: "subscriptions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        autoRenew: import("drizzle-orm/pg-core").PgColumn<{
            name: "auto_renew";
            tableName: "subscriptions";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        paymentMethod: import("drizzle-orm/pg-core").PgColumn<{
            name: "payment_method";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        amount: import("drizzle-orm/pg-core").PgColumn<{
            name: "amount";
            tableName: "subscriptions";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        currency: import("drizzle-orm/pg-core").PgColumn<{
            name: "currency";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        billingCycle: import("drizzle-orm/pg-core").PgColumn<{
            name: "billing_cycle";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        paymentId: import("drizzle-orm/pg-core").PgColumn<{
            name: "payment_id";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        orderId: import("drizzle-orm/pg-core").PgColumn<{
            name: "order_id";
            tableName: "subscriptions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "subscriptions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "subscriptions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const usersRelations: import("drizzle-orm").Relations<"users", {
    conversations1: import("drizzle-orm").Many<"conversations">;
    conversations2: import("drizzle-orm").Many<"conversations">;
    messages: import("drizzle-orm").Many<"messages">;
    aiChats: import("drizzle-orm").Many<"ai_chats">;
    subscriptions: import("drizzle-orm").Many<"subscriptions">;
}>;
export declare const conversationsRelations: import("drizzle-orm").Relations<"conversations", {
    user1: import("drizzle-orm").One<"users", false>;
    user2: import("drizzle-orm").One<"users", false>;
    messages: import("drizzle-orm").Many<"messages">;
}>;
export declare const messagesRelations: import("drizzle-orm").Relations<"messages", {
    conversation: import("drizzle-orm").One<"conversations", false>;
    sender: import("drizzle-orm").One<"users", false>;
}>;
export declare const aiChatsRelations: import("drizzle-orm").Relations<"ai_chats", {
    user: import("drizzle-orm").One<"users", false>;
}>;
export declare const subscriptionsRelations: import("drizzle-orm").Relations<"subscriptions", {
    user: import("drizzle-orm").One<"users", true>;
}>;
export declare const insertUserSchema: import("drizzle-zod").BuildSchema<"insert", {
    id: import("drizzle-orm/pg-core").PgColumn<{
        name: "id";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: true;
        isPrimaryKey: true;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    email: import("drizzle-orm/pg-core").PgColumn<{
        name: "email";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    firstName: import("drizzle-orm/pg-core").PgColumn<{
        name: "first_name";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    lastName: import("drizzle-orm/pg-core").PgColumn<{
        name: "last_name";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    profileImageUrl: import("drizzle-orm/pg-core").PgColumn<{
        name: "profile_image_url";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    primaryLanguage: import("drizzle-orm/pg-core").PgColumn<{
        name: "primary_language";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    location: import("drizzle-orm/pg-core").PgColumn<{
        name: "location";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    password: import("drizzle-orm/pg-core").PgColumn<{
        name: "password";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    googleId: import("drizzle-orm/pg-core").PgColumn<{
        name: "google_id";
        tableName: "users";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    emailVerified: import("drizzle-orm/pg-core").PgColumn<{
        name: "email_verified";
        tableName: "users";
        dataType: "boolean";
        columnType: "PgBoolean";
        data: boolean;
        driverParam: boolean;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    createdAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "created_at";
        tableName: "users";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "updated_at";
        tableName: "users";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
}, undefined>;
export declare const insertConversationSchema: import("drizzle-zod").BuildSchema<"insert", {
    id: import("drizzle-orm/pg-core").PgColumn<{
        name: "id";
        tableName: "conversations";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: true;
        isPrimaryKey: true;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    user1Id: import("drizzle-orm/pg-core").PgColumn<{
        name: "user1_id";
        tableName: "conversations";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    user2Id: import("drizzle-orm/pg-core").PgColumn<{
        name: "user2_id";
        tableName: "conversations";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    user1Language: import("drizzle-orm/pg-core").PgColumn<{
        name: "user1_language";
        tableName: "conversations";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    user2Language: import("drizzle-orm/pg-core").PgColumn<{
        name: "user2_language";
        tableName: "conversations";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    status: import("drizzle-orm/pg-core").PgColumn<{
        name: "status";
        tableName: "conversations";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    createdAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "created_at";
        tableName: "conversations";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "updated_at";
        tableName: "conversations";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
}, undefined>;
export declare const insertMessageSchema: import("drizzle-zod").BuildSchema<"insert", {
    id: import("drizzle-orm/pg-core").PgColumn<{
        name: "id";
        tableName: "messages";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: true;
        isPrimaryKey: true;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    conversationId: import("drizzle-orm/pg-core").PgColumn<{
        name: "conversation_id";
        tableName: "messages";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    senderId: import("drizzle-orm/pg-core").PgColumn<{
        name: "sender_id";
        tableName: "messages";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    originalText: import("drizzle-orm/pg-core").PgColumn<{
        name: "original_text";
        tableName: "messages";
        dataType: "string";
        columnType: "PgText";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    translatedText: import("drizzle-orm/pg-core").PgColumn<{
        name: "translated_text";
        tableName: "messages";
        dataType: "string";
        columnType: "PgText";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    originalLanguage: import("drizzle-orm/pg-core").PgColumn<{
        name: "original_language";
        tableName: "messages";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    targetLanguage: import("drizzle-orm/pg-core").PgColumn<{
        name: "target_language";
        tableName: "messages";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    audioUrl: import("drizzle-orm/pg-core").PgColumn<{
        name: "audio_url";
        tableName: "messages";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    createdAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "created_at";
        tableName: "messages";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
}, undefined>;
export declare const insertAiChatSchema: import("drizzle-zod").BuildSchema<"insert", {
    id: import("drizzle-orm/pg-core").PgColumn<{
        name: "id";
        tableName: "ai_chats";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: true;
        isPrimaryKey: true;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    userId: import("drizzle-orm/pg-core").PgColumn<{
        name: "user_id";
        tableName: "ai_chats";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    messages: import("drizzle-orm/pg-core").PgColumn<{
        name: "messages";
        tableName: "ai_chats";
        dataType: "json";
        columnType: "PgJsonb";
        data: unknown;
        driverParam: unknown;
        notNull: true;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    location: import("drizzle-orm/pg-core").PgColumn<{
        name: "location";
        tableName: "ai_chats";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    language: import("drizzle-orm/pg-core").PgColumn<{
        name: "language";
        tableName: "ai_chats";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    createdAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "created_at";
        tableName: "ai_chats";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "updated_at";
        tableName: "ai_chats";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
}, undefined>;
export declare const insertSubscriptionSchema: import("drizzle-zod").BuildSchema<"insert", {
    id: import("drizzle-orm/pg-core").PgColumn<{
        name: "id";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: true;
        isPrimaryKey: true;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    userId: import("drizzle-orm/pg-core").PgColumn<{
        name: "user_id";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    planId: import("drizzle-orm/pg-core").PgColumn<{
        name: "plan_id";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    status: import("drizzle-orm/pg-core").PgColumn<{
        name: "status";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    startDate: import("drizzle-orm/pg-core").PgColumn<{
        name: "start_date";
        tableName: "subscriptions";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    endDate: import("drizzle-orm/pg-core").PgColumn<{
        name: "end_date";
        tableName: "subscriptions";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    autoRenew: import("drizzle-orm/pg-core").PgColumn<{
        name: "auto_renew";
        tableName: "subscriptions";
        dataType: "boolean";
        columnType: "PgBoolean";
        data: boolean;
        driverParam: boolean;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    paymentMethod: import("drizzle-orm/pg-core").PgColumn<{
        name: "payment_method";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    amount: import("drizzle-orm/pg-core").PgColumn<{
        name: "amount";
        tableName: "subscriptions";
        dataType: "number";
        columnType: "PgInteger";
        data: number;
        driverParam: string | number;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    currency: import("drizzle-orm/pg-core").PgColumn<{
        name: "currency";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    billingCycle: import("drizzle-orm/pg-core").PgColumn<{
        name: "billing_cycle";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: true;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    paymentId: import("drizzle-orm/pg-core").PgColumn<{
        name: "payment_id";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    orderId: import("drizzle-orm/pg-core").PgColumn<{
        name: "order_id";
        tableName: "subscriptions";
        dataType: "string";
        columnType: "PgVarchar";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {
        length: number | undefined;
    }>;
    createdAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "created_at";
        tableName: "subscriptions";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
    updatedAt: import("drizzle-orm/pg-core").PgColumn<{
        name: "updated_at";
        tableName: "subscriptions";
        dataType: "date";
        columnType: "PgTimestamp";
        data: Date;
        driverParam: string;
        notNull: false;
        hasDefault: true;
        isPrimaryKey: false;
        isAutoincrement: false;
        hasRuntimeDefault: false;
        enumValues: undefined;
        baseColumn: never;
        identity: undefined;
        generated: undefined;
    }, {}, {}>;
}, undefined>;
export declare const signupSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}, {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const googleAuthSchema: z.ZodObject<{
    idToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    idToken: string;
}, {
    idToken: string;
}>;
export declare const languageConversionSchema: z.ZodObject<{
    audioData: z.ZodString;
    sourceLanguage: z.ZodOptional<z.ZodString>;
    targetLanguage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    targetLanguage: string;
    audioData: string;
    sourceLanguage?: string | undefined;
}, {
    targetLanguage: string;
    audioData: string;
    sourceLanguage?: string | undefined;
}>;
export declare const chatAgentSchema: z.ZodObject<{
    message: z.ZodString;
    location: z.ZodOptional<z.ZodString>;
    language: z.ZodDefault<z.ZodString>;
    includeEmergencyContacts: z.ZodOptional<z.ZodBoolean>;
    includeTravelTips: z.ZodOptional<z.ZodBoolean>;
    includePriceComparison: z.ZodOptional<z.ZodBoolean>;
    includeEvents: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    language: string;
    message: string;
    location?: string | undefined;
    includeEmergencyContacts?: boolean | undefined;
    includeTravelTips?: boolean | undefined;
    includePriceComparison?: boolean | undefined;
    includeEvents?: boolean | undefined;
}, {
    message: string;
    location?: string | undefined;
    language?: string | undefined;
    includeEmergencyContacts?: boolean | undefined;
    includeTravelTips?: boolean | undefined;
    includePriceComparison?: boolean | undefined;
    includeEvents?: boolean | undefined;
}>;
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type InsertConversation = z.infer<typeof insertConversationSchema>;
export type Conversation = typeof conversations.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertAiChat = z.infer<typeof insertAiChatSchema>;
export type AiChat = typeof aiChats.$inferSelect;
export type InsertSubscription = z.infer<typeof insertSubscriptionSchema>;
export type Subscription = typeof subscriptions.$inferSelect;
//# sourceMappingURL=schema.d.ts.map