<template>
  <div @click="toggle" class="container">loading toggle: {{ isTrue }}</div>
  <div :class="{'h-0':isTrue}" class="loading">
	<css-doodle grid="200x1" class="w-screen">
		:doodle {
			@size: 100dvw;
			overflow: hidden;
		}
		@size: 100%;
		@place-cell: center;
		
		::before{
			content: "";
			@size: @r(5%);
			border: 1px solid white;
			background: @p(none, white, linear-gradient(to @p(bottom, left), @stripe(black, white 1px, black, white 1px, black, white 1px, black, white 1px, black, white 1px, black)));
			border-radius: @p(0, 50%);
			position: absolute;
			top: @r(100%);
			left: @r(100%);
			animation: floatingUpDown @r(1.5s, 5s) @r(1.5s) linear infinite alternate; 
		}
		
		::after {
			content: "";
			height: @r(0.5%);
			width: @r(1.5%, 7%);
			background: white;
			position: absolute;
			top: @r(100%);
			left: @r(100%);
			animation: floatingStickAnim @r(1.5s, 5s) @r(1.5s) linear infinite alternate; 
			transform: translateX(300%);
			transition: background 0.2s;
		}
		
		:doodle(:hover)::after{
			background: limegreen;
		}
		
		@keyframes floatingUpDown {
			100% {
				transform: translateY(-50%) rotateZ(@r(-5deg, 5deg));
			}
		}
		
		@keyframes floatingStickAnim {
			100% {
				transform: translateX(-300%);
			}
		}
	</css-doodle>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const isTrue = ref(false)
setTimeout(() => {
  isTrue.value = true;
}, 4000);

function toggle() { 
  isTrue.value = false
  console.log('mococo')
  setTimeout(() => {
  isTrue.value = true;
}, 4000);
}
</script>
<style>
.loading{
  height: 100dvh;
  width: 100dvw;
  background: #000;
  opacity: 1;
  transition:all 2.2s;
  position: absolute;
  inset:0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.h-0{
  opacity: 0;
  z-index:-1;
}
</style>