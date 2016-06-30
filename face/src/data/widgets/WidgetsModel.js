import {Model} from 'backbone';

export default class WidgetsModel extends Model {
    url = 'data/widgets.json';

    getWidgetData(name) {
        const items = this.get(name);
        return new Model(Array.isArray(items) ? {items} : items);
    }
}
