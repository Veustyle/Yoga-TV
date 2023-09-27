<?php

namespace App\Twig\Components;

use App\Repository\CompteurRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class SearchComponent
{
    use DefaultActionTrait;

    #[LiveProp]
    public int $total = 0;

    public function __construct (private readonly CompteurRepository $repository) {}

   public function getAllViews () : ?int {
       return count($this->repository->findAll());
   }
}
