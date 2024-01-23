<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Bar
      </h1>
      <p>
        The <code class="green--text mx-2 title">e-bar</code> is
        a horizontal bar that can be used to group buttons, tabs, or other components.
      </p>
    </div>
    <section class="mb-12" style="height: 560px;">
      <iframe src="/iframe/bar" frameborder="0" width="100%" height="100%"></iframe>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Props</h2>
      <p>Explore the available props for the form component</p>
      <div class="responsive-table">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="( item, i ) in  barApiReference " :key="i">
              <td>{{ item.property }}</td>
              <td v-html="item.description"> </td>
              <td :class="item.type.class" v-html="item.type.value"></td>
              <td :class="item.default.class">{{ item.default.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">SASS Variables</h2>
      <div class="responsive-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$e-bar-padding-y</td>
              <td class="string">0px <span class="boolean">!default;</span></td>
            </tr>
            <tr>
              <td>$e-bar-padding-x</td>
              <td class="string">16px <span class="boolean">!default;</span></td>
            </tr>
            <tr>
              <td>$e-bar-heigth</td>
              <td class="string">64px <span class="boolean">!default;</span></td>
            </tr>
            <tr>
              <td>$e-bar-heigth--dense</td>
              <td class="string">48px <span class="boolean">!default;</span></td>
            </tr>
            <tr>
              <td>$e-bar-box-shadow</td>
              <td>
                <div v-prism="{ class: 'language-scss' }">
                  <pre>
0 3px 1px -2px rgba(0, 0, 0, 0.2),
0 2px 2px 0 rgba(0, 0, 0, 0.14),
0 1px 5px 0 rgba(0, 0, 0, 0.12) !default;
</pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import barApiReference from '@/api-reference/bar.json'
</script>