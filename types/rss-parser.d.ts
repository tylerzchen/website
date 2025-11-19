declare module 'rss-parser' {
  export default class Parser<TItem = unknown, TFeed = unknown> {
    parseString(xml: string): Promise<TFeed & { items: TItem[] }>
  }
}


