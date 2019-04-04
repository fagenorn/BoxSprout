@component('mail::message')
# Order Shipped

NIEUWE BESTELLING!!!! WEWEWEWEWEWE

@component('mail::button', ['url' => "https://google.com?q=go+fuck+yourself"])
View Order
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
