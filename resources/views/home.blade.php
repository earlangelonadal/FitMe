@extends('layouts.app')

@section('title','Home')


@section('content')

@include('components.banner')
@include('components.featured_blocks')
@include('components.content1')
@include('components.content2')
@include('components.content3')
@include('components.form')

@include('components.footer')





@endsection