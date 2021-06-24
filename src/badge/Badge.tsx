import { computed, defineComponent } from 'vue'
import type { PropType, CSSProperties } from 'vue'

import { isNil } from 'lodash-es'

import bem from '../util/bem'
import { addUnit } from '../util/css'
import { renderSlot } from '../util/compile'
import { toNumber, isNumeric } from '../util/number'

const badge = bem('badge')

export default defineComponent({
  name: 'vux-badge',

  props: {
    dot: Boolean,
    max: [Number, String] as PropType<string | number>,
    color: String,
    offset: Array as PropType<Array<string | number>>,
    content: [Number, String] as PropType<string | number>,
    showZero: {
      type: Boolean,
      default: true as const,
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
  },

  setup(props, { slots }) {
    const maxRef = computed(() => toNumber(props.max) || 0)

    /**
     * 渲染数字
     *
     * @param num 数字
     */
    function renderNum(num: number): Array<string | number> {
      // 如果不是数字或 0
      if (num === 0) return props.showZero ? ['0'] : []

      const max = maxRef.value
      return [max > 0 && num > max ? `${max}+` : num]
    }

    /**
     * 渲染内容
     */
    function renderContent(): Array<string | number> {
      const content = props.content as string | number
      if (isNil(content) || content === '') return []

      const type = typeof content
      if (type === 'number') {
        return renderNum(content as number)
      }

      if (type === 'string') {
        return isNumeric(content) ? renderNum(Number(content)) : [content]
      }

      return []
    }

    function renderBadge(fixed: boolean) {
      if (props.dot) {
        return (
          <div
            class={[badge.component(), badge.mod({ dot: true, fixed })]}
            style={getStyle(fixed, props.color, props.offset)}
          />
        )
      }

      return (
        <div
          class={[badge.component(), badge.mod({ fixed })]}
          style={getStyle(fixed, props.color, props.offset)}
        >
          {renderSlot(slots, 'content', {}, renderContent)}
        </div>
      )
    }

    return () => {
      const slot = slots['default']
      if (slot) {
        return (
          <props.tag class={badge.elem('wrapper')}>
            {slot()}
            {renderBadge(true)}
          </props.tag>
        )
      }

      return renderBadge(false)
    }
  },
})

function getStyle(
  fixed: boolean,
  color?: string,
  offset?: Array<string | number>
) {
  const style: CSSProperties = {
    background: color,
  }

  if (offset) {
    const [x, y] = offset
    if (fixed) {
      style.top = addUnit(y)
      style.right = `-${addUnit(x)}`
    } else {
      style.marginTop = addUnit(y)
      style.marginLeft = addUnit(x)
    }
  }

  return style
}
