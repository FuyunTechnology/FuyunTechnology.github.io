/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/404': RouteRecordInfo<'/404', '/404', Record<never, never>, Record<never, never>>,
    '/about/': RouteRecordInfo<'/about/', '/about', Record<never, never>, Record<never, never>>,
    '/about/site': RouteRecordInfo<'/about/site', '/about/site', Record<never, never>, Record<never, never>>,
    '/albums/': RouteRecordInfo<'/albums/', '/albums', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/artist/': RouteRecordInfo<'/artist/', '/artist', Record<never, never>, Record<never, never>>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/links/': RouteRecordInfo<'/links/', '/links', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/posts/': RouteRecordInfo<'/posts/', '/posts', Record<never, never>, Record<never, never>>,
    '/posts/article/Application': RouteRecordInfo<'/posts/article/Application', '/posts/article/Application', Record<never, never>, Record<never, never>>,
    '/posts/article/Files of ClaasIsland': RouteRecordInfo<'/posts/article/Files of ClaasIsland', '/posts/article/Files of ClaasIsland', Record<never, never>, Record<never, never>>,
    '/posts/blog/blog-creat': RouteRecordInfo<'/posts/blog/blog-creat', '/posts/blog/blog-creat', Record<never, never>, Record<never, never>>,
    '/posts/blog/Template': RouteRecordInfo<'/posts/blog/Template', '/posts/blog/Template', Record<never, never>, Record<never, never>>,
    '/posts/others/account': RouteRecordInfo<'/posts/others/account', '/posts/others/account', Record<never, never>, Record<never, never>>,
    '/posts/others/Homework': RouteRecordInfo<'/posts/others/Homework', '/posts/others/Homework', Record<never, never>, Record<never, never>>,
    '/posts/poem/Alone the clouds': RouteRecordInfo<'/posts/poem/Alone the clouds', '/posts/poem/Alone the clouds', Record<never, never>, Record<never, never>>,
    '/posts/poem/Batter/Memories and thought': RouteRecordInfo<'/posts/poem/Batter/Memories and thought', '/posts/poem/Batter/Memories and thought', Record<never, never>, Record<never, never>>,
    '/posts/poem/Batter/Reminding deeply': RouteRecordInfo<'/posts/poem/Batter/Reminding deeply', '/posts/poem/Batter/Reminding deeply', Record<never, never>, Record<never, never>>,
    '/posts/poem/Batter/Starlight flowing pointer': RouteRecordInfo<'/posts/poem/Batter/Starlight flowing pointer', '/posts/poem/Batter/Starlight flowing pointer', Record<never, never>, Record<never, never>>,
    '/posts/poem/Cloud boat by the  time': RouteRecordInfo<'/posts/poem/Cloud boat by the  time', '/posts/poem/Cloud boat by the  time', Record<never, never>, Record<never, never>>,
    '/posts/poem/Distance': RouteRecordInfo<'/posts/poem/Distance', '/posts/poem/Distance', Record<never, never>, Record<never, never>>,
    '/posts/poem/Fading clouds': RouteRecordInfo<'/posts/poem/Fading clouds', '/posts/poem/Fading clouds', Record<never, never>, Record<never, never>>,
    '/posts/poem/Foiling and wishing': RouteRecordInfo<'/posts/poem/Foiling and wishing', '/posts/poem/Foiling and wishing', Record<never, never>, Record<never, never>>,
    '/posts/poem/For mother': RouteRecordInfo<'/posts/poem/For mother', '/posts/poem/For mother', Record<never, never>, Record<never, never>>,
    '/posts/poem/Home town': RouteRecordInfo<'/posts/poem/Home town', '/posts/poem/Home town', Record<never, never>, Record<never, never>>,
    '/posts/poem/Leisurely village': RouteRecordInfo<'/posts/poem/Leisurely village', '/posts/poem/Leisurely village', Record<never, never>, Record<never, never>>,
    '/posts/poem/Look ahead': RouteRecordInfo<'/posts/poem/Look ahead', '/posts/poem/Look ahead', Record<never, never>, Record<never, never>>,
    '/posts/poem/Lost': RouteRecordInfo<'/posts/poem/Lost', '/posts/poem/Lost', Record<never, never>, Record<never, never>>,
    '/posts/poem/Lovely clouds': RouteRecordInfo<'/posts/poem/Lovely clouds', '/posts/poem/Lovely clouds', Record<never, never>, Record<never, never>>,
    '/posts/poem/Lyrics/Collapsing world': RouteRecordInfo<'/posts/poem/Lyrics/Collapsing world', '/posts/poem/Lyrics/Collapsing world', Record<never, never>, Record<never, never>>,
    '/posts/poem/Lyrics/Daylight': RouteRecordInfo<'/posts/poem/Lyrics/Daylight', '/posts/poem/Lyrics/Daylight', Record<never, never>, Record<never, never>>,
    '/posts/poem/Memory': RouteRecordInfo<'/posts/poem/Memory', '/posts/poem/Memory', Record<never, never>, Record<never, never>>,
    '/posts/poem/Mother`s love always': RouteRecordInfo<'/posts/poem/Mother`s love always', '/posts/poem/Mother`s love always', Record<never, never>, Record<never, never>>,
    '/posts/poem/Not that time': RouteRecordInfo<'/posts/poem/Not that time', '/posts/poem/Not that time', Record<never, never>, Record<never, never>>,
    '/posts/poem/Passed by': RouteRecordInfo<'/posts/poem/Passed by', '/posts/poem/Passed by', Record<never, never>, Record<never, never>>,
    '/posts/poem/Places of love staying': RouteRecordInfo<'/posts/poem/Places of love staying', '/posts/poem/Places of love staying', Record<never, never>, Record<never, never>>,
    '/posts/poem/Pond': RouteRecordInfo<'/posts/poem/Pond', '/posts/poem/Pond', Record<never, never>, Record<never, never>>,
    '/posts/poem/Remembering': RouteRecordInfo<'/posts/poem/Remembering', '/posts/poem/Remembering', Record<never, never>, Record<never, never>>,
    '/posts/poem/Rush time': RouteRecordInfo<'/posts/poem/Rush time', '/posts/poem/Rush time', Record<never, never>, Record<never, never>>,
    '/posts/poem/Spring': RouteRecordInfo<'/posts/poem/Spring', '/posts/poem/Spring', Record<never, never>, Record<never, never>>,
    '/posts/poem/star': RouteRecordInfo<'/posts/poem/star', '/posts/poem/star', Record<never, never>, Record<never, never>>,
    '/posts/poem/The sand by the sea of time': RouteRecordInfo<'/posts/poem/The sand by the sea of time', '/posts/poem/The sand by the sea of time', Record<never, never>, Record<never, never>>,
    '/posts/poem/The weaving of spring scenery': RouteRecordInfo<'/posts/poem/The weaving of spring scenery', '/posts/poem/The weaving of spring scenery', Record<never, never>, Record<never, never>>,
    '/posts/poem/Time above the firework': RouteRecordInfo<'/posts/poem/Time above the firework', '/posts/poem/Time above the firework', Record<never, never>, Record<never, never>>,
    '/posts/poem/waiting': RouteRecordInfo<'/posts/poem/waiting', '/posts/poem/waiting', Record<never, never>, Record<never, never>>,
    '/posts/poem/Why': RouteRecordInfo<'/posts/poem/Why', '/posts/poem/Why', Record<never, never>, Record<never, never>>,
    '/posts/poem/Wind': RouteRecordInfo<'/posts/poem/Wind', '/posts/poem/Wind', Record<never, never>, Record<never, never>>,
    '/posts/poem/Within': RouteRecordInfo<'/posts/poem/Within', '/posts/poem/Within', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
  }
}
