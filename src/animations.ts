import { animate, query, style, transition, trigger, group } from "@angular/animations";

const duration = '300ms cubic-bezier(0, 1.4, 1, 1)';

export const fadeIn = trigger('fadeIn', [
    // https://github.com/lightzane/learn-angular-route-animations
    transition('* <=> *', [
        query(':enter, :leave', [
            style({ opacity: 0, position: 'absolute' })
        ], { optional: true }),
        group([
            query(':enter', [
                style({ opacity: 0, transform: 'translateX(-100px)' }),
                animate(duration)
            ], { optional: true }),
            query(':leave', [
                animate(duration, style({ opacity: 0 }))
            ], { optional: true })
        ])
    ])
]);