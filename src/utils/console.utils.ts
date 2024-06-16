
export const LOG_TAGS = {
  APPLICATION_TAG: 'SPACEBOX',
  ASYNC_STORAGE_TAG: 'ASYNC_STORAGE',
};

export function log(TAG: string, msg: string) {
  if (__DEV__) {
    console.log(LOG_TAGS.APPLICATION_TAG, TAG, msg);
  }
}
