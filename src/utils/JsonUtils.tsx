declare namespace JsonType
{
    interface JsonObject
    {
        [key: string]: any;
    }

    type JsonText = string | null | undefined;
}

export default class JsonUtils
{
    public static toJson(data: any): string
    {
        return JSON.stringify(data);
    }

    public static fromJson(json: JsonType.JsonText,
                    reviver?: ((this: any, key: string, value: any) => any) | undefined,
                    onError?: (errorMsg: string, json: JsonType.JsonText) => {}): JsonType.JsonObject | undefined | null
    {
        if (typeof json !== "string")
        {
            return null;
        }
        try
        {
            return JSON.parse(json, reviver);
        }
        catch (e: Error | any)
        {
            if (onError)
            {
                onError(e.message, json);
            }
            else {
                return {};
            }
        }
    }
}
