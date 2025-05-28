import {loadGLTF} from 'https://cdn.jsdelivr.net/npm/mind-ar@1.1.4/examples/threejs/utils/loader.js';

document.addEventListener("DOMContentLoaded", async () => {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#container"),
    imageTargetSrc: "./imagetarget/kuromoji.mind",
  });

  const {renderer, scene, camera} = mindarThree;

  const anchor = mindarThree.addAnchor(0);
  const model = await loadGLTF("./models/KuromojiBase.glb"); // ← あなたのファイル名に合わせて変更
  model.scene.scale.set(0.3, 0.3, 0.3); // サイズ調整
  model.scene.rotation.y = Math.PI;     // 必要に応じて調整
  anchor.group.add(model.scene);

  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
});
