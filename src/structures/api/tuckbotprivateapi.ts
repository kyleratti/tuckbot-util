import { StaleVideo } from "..";

export interface ApiResponse {
  status: {
    /** The HTTP status code of the response */
    status: number;
    /** The HTTP status code of the response */
    statusCode?: number;
    /** The custom message included with the response */
    message: string;
  };

  /** Data returned from the response, if any */
  data?: any;
}

export interface VideoUpdateRequestOptions {
  redditPostId: string;
  redditPostTitle: string;
  mirrorUrl: string;
}

export interface PruneVideoResponse extends ApiResponse {}

export interface VideoExistsResponse extends ApiResponse {
  data: {
    /** The post ID of the original video */
    redditPostId: string;
    /** The URL to the mirror of the original video */
    mirrorUrl: string;
  };
}

export interface RemoveVideoResponse extends ApiResponse {}

export interface FetchStaleVideosResponse extends ApiResponse {
  data: {
    /** An array of mirrored videos that are stale */
    staleVideos: StaleVideo[];
  };
}
