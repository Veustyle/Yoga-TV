<?php

namespace App\Twig\Components;

use App\Repository\PostRepository;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
final class SimpleCardComponent
{
   public int $id;

   public function __construct (private readonly PostRepository $repository) {}

   public function getPost () {
      return $this->repository->find($this->id);
   }
}
