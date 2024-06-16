// src/common/events.ts
import Emitter from 'tiny-emitter';

export const emitter = new Emitter();

export const eventName = {
    SHOW_TOAST: "showToast"
}
