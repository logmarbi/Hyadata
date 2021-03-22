/* eslint-disable */
import React, { useState } from 'react';
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"


export default function Cards() {
  const [selectedId, setSelectedId] = useState(null)
  const [items, setItems] = useState([{id: 1,subtitle: "aaa", title: "bbb"} ])
  return (
    <>
<ul class="Layout_gallery__3xuZW"><li class="Layout_item__1IWEB" style="opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;"><div class="Layout_placeholder__oaUhB" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 1;"><div></div><div></div><div></div></div><div class="Layout_additional__2O1dX" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 1;"><div></div><div></div><div></div></div><div class="Layout_itemClose__181fK" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 0;"></div></li><li class="Layout_item__1IWEB" style="opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;"><div class="Layout_placeholder__oaUhB" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 1;"><div></div><div></div><div></div></div><div class="Layout_additional__2O1dX" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 1;"><div></div><div></div><div></div></div><div class="Layout_itemClose__181fK" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 0;"></div></li><li class="Layout_item__1IWEB" style="opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;"><div class="Layout_placeholder__oaUhB" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 1;"><div></div><div></div><div></div></div><div class="Layout_additional__2O1dX" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 1;"><div></div><div></div><div></div></div><div class="Layout_itemClose__181fK" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 0;"></div></li><li class="Layout_item__1IWEB" style="opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;"><div class="Layout_placeholder__oaUhB" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 1;"><div></div><div></div><div></div></div><div class="Layout_additional__2O1dX" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 1;"><div></div><div></div><div></div></div><div class="Layout_itemClose__181fK" style="visibility: visible; transform-origin: 50% 50% 0px; opacity: 0;"></div></li></ul>
    </>
  );
}
